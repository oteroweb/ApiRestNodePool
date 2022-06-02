const express = require('express')
const app = express()
const product = require('../controllers/products')

const router = express.Router();

router.use((req, res, next) => {
	console.log('Time: ', Date.now())
	next()
  })
router.get('/', product.getProducts);
router.get('/:id', product.getProductById);
router.post('/', product.createProduct);
router.put	('/:id', product.updateProduct);
router.delete('/:id', product.deleteProduct);

module.exports = router;