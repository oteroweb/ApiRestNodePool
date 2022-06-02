const pool = require('../config')

const getUsers = (request, response) => {
  pool.query('SELECT * FROM user ORDER BY IdUser ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results)
  })
}

const getUserById = (request, response) => {
  const id = parseInt(request.params.id)
  pool.query('SELECT * FROM user WHERE IdUser = '+id, [id], (error, results) => {
	  if (error) {
      throw error
    }
    response.status(200).json(results)
  })
}

const createUser = (request, response) => {
  const { name, email } = request.body
  const status = 1;
  pool.query(`INSERT INTO user (name, email,status) VALUES (?, ?,?)`, [name, email, status], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${results.insertId}`)
  })
}

const updateUser = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, email } = request.body

  pool.query(
    'UPDATE user SET name = ?, email = ? WHERE IdUser = ?',[name, email, id],
    (error, results) => {

      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
}

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM user WHERE IdUser = ?', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}
