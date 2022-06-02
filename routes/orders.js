const express = require('express')
const app = express()
const order = require('../controllers/orders')

const router = express.Router();

router.use((req, res, next) => {
	console.log('Time: ', Date.now())
	next()
  })
router.get('/', order.getOrders);
router.get('/:id', order.getOrderById);
router.post('/', order.createOrder);
router.put	('/:id', order.updateOrder);
router.delete('/:id', order.deleteOrder);

module.exports = router;