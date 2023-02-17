const express = require('express')
const router = express.Router()
const {getAllBooks,addBook,updateBook,deleteBook} = require('../controllers/BookStore')

router.route('/bookstore').get(getAllBooks).post(addBook)
router.route('/bookstore/:id').patch(updateBook).delete(deleteBook)
// router.route('/bookstore/:title').delete(deleteBook)
module.exports = router