const pool = require('../config')


const getProducts = (request, response) => {
  pool.query('SELECT * FROM OrdersProducts ORDER BY IdOrdersProducts  ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results)
  })
}

const getProductById = (request, response) => {
  const id = parseInt(request.params.id)
  pool.query('SELECT * FROM OrdersProducts WHERE IdOrdersProducts  = '+id, [id], (error, results) => {
	  if (error) {
      throw error
    }
    response.status(200).json(results)
  })
}

const createProduct = (request, response) => {
  const { IdOrder, ValueUnit, Unit, Description, SKU, Quantity, QtyBox, Weight, Volumen, Mark} = request.body
  const status = 1;

  pool.query(`INSERT INTO OrdersProducts (idOrder, ValueUnit, Unit, Description, SKU, Quantity, QtyBox, Weight, Volumen, Mark, Status) VALUES (?,?,?,?,?,?,?,?,?,?,?)`, [IdOrder, ValueUnit, Unit, Description, SKU, Quantity, QtyBox, Weight, Volumen, Mark, status], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Order added with ID: ${results.insertId}`)
  })
}

const updateProduct = (request, response) => {
  const id = parseInt(request.params.id)
  const { IdOrder, ValueUnit, Unit, Description, SKU, Quantity, QtyBox, Weight, Volumen, Mark, Status} = request.body

  pool.query(
    'UPDATE OrdersProducts SET idOrder  = ?, ValueUnit = ?,Unit = ?,Description = ?,SKU = ?,Quantity = ?,QtyBox = ?,Weight = ?,Volumen = ?,Mark = ?,Status = ? WHERE IdOrdersProducts  = ?',[IdOrder, ValueUnit, Unit, Description, SKU, Quantity, QtyBox, Weight, Volumen, Mark, Status, id],
    (error, results) => {

      if (error) {
        throw error
      }
      response.status(200).send(`Order modified with ID: ${id}`)
    }
  )
}

const deleteProduct = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM OrdersProducts WHERE IdOrdersProducts  = ?', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Order deleted with ID: ${id}`)
  })
}

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
}
