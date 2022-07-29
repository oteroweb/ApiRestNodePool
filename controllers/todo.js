const pool = require('../config')

const getTodos = (request, response) => {
  pool.query('SELECT * FROM todo ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results)
  })
}

const createTodo = (request, response) => {
  const { name } = request.body
  const status = 1;

  pool.query(`INSERT INTO todo (name, status) VALUES (?,?)`, [name, status], (error, results) => {
    if (error) {
      throw error
    }
	
    response.status(201).send(`Todo added with ID: ${results.insertId}`)
  })
}

const updateTodo = (request, response) => {
  const id = parseInt(request.params.id)
  const {  name} = request.body

  pool.query(
    'UPDATE todo SET name = ? WHERE id = ?',[name,id],
	
    (error, results) => {

      if (error) {
        throw error
      }
      response.status(200).send(`Todo modified with ID: ${id}`)
    }
  )
}

const toggleTodo = (request, response) => {
	const id = parseInt(request.params.id)
  pool.query('SELECT * FROM todo WHERE id = '+id, [id], (error, results) => {
	  if (error) {
      throw error
    }
	// response.status(200).json(results)
	const newStatus = (results[0].status) ? 0 : 1;
	pool.query(
		'UPDATE todo SET status = ? WHERE id = ?',[newStatus,id],
		(error) => { if (error) { throw error }
		  response.status(200).send(`Todo modified with to: ${newStatus}`)
		}
	  )
  })
  }

const deleteTodo = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM todo WHERE id = ?', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Todo deleted with ID: ${id}`)
  })
}

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  toggleTodo,
}
