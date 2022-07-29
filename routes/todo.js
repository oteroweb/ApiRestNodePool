const express = require('express')
const app = express()
const todo = require('../controllers/todo')

const router = express.Router();

router.use((req, res, next) => {
	console.log('Time: ', Date.now())
	next()
  })
router.get('/', todo.getTodos);
router.put('/toggle/:id', todo.toggleTodo);
router.post('/', todo.createTodo);
router.put	('/:id', todo.updateTodo);
router.delete('/:id', todo.deleteTodo);

module.exports = router;