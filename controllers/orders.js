const pool = require('../config')


const getOrders = (request, response) => {
  pool.query('SELECT * FROM orders ORDER BY IdOrder ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results)
  })
}

const getOrderById = (request, response) => {
  const id = parseInt(request.params.id)
  pool.query('SELECT * FROM orders WHERE IdOrder = '+id, [id], (error, results) => {
	  if (error) {
      throw error
    }
    response.status(200).json(results)
  })
}

const createOrder = (request, response) => {
  const { IdOrder, IdUser, OrderNumber, DateTime,	ProviderName,DateCreated, Observation,TotalValue } = request.body
  const status = 1;

  pool.query(`INSERT INTO orders (IdOrder, IdUser, OrderNumber, DateTime,	ProviderName,DateCreated, Observation,TotalValue, Status) VALUES (?,?,?,?,?,?,?,?,?)`, [IdOrder, IdUser, OrderNumber, DateTime,	ProviderName,DateCreated, Observation,TotalValue, status], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Order added with ID: ${results.insertId}`)
  })
}

const updateOrder = (request, response) => {
  const id = parseInt(request.params.id)
  const {  IdUser, OrderNumber, DateTime,	ProviderName,DateCreated, Observation,TotalValue, status} = request.body

  pool.query(
    'UPDATE orders SET IdUser = ?, OrderNumber = ?, DateTime = ?,	ProviderName = ?,DateCreated = ?, Observation = ?,TotalValue = ?, Status = ? WHERE IdOrder = ?',[IdUser, OrderNumber, DateTime,	ProviderName,DateCreated, Observation,TotalValue, status, id],
    (error, results) => {

      if (error) {
        throw error
      }
      response.status(200).send(`Order modified with ID: ${id}`)
    }
  )
}

const deleteOrder = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM orders WHERE IdOrder = ?', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Order deleted with ID: ${id}`)
  })
}

module.exports = {
  getOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
}
