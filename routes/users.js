const express = require('express')
const app = express()
const user = require('../controllers/users')

const router = express.Router();

router.use((req, res, next) => {
	console.log('Time: ', Date.now())
	next()
  })
router.get('/', user.getUsers);
router.get('/:id', user.getUserById);
router.post('/', user.createUser);
router.put	('/:id', user.updateUser);
router.delete('/:id', user.deleteUser);

module.exports = router;