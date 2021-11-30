const bookController = require('../controllers/books');
const router = require('express').Router();

router.get('/books',bookController.getAllBooks);
router.get('/books/:id',bookController.getById);
router.post('/books',bookController.addBook);

module.exports=router;