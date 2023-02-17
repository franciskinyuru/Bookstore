const express = require('express')
const router = express.Router()
const {getAllBooks,addBook} = require('../controllers/BookStore')

router.route('/bookstore').get(getAllBooks).post(addBook)

module.exports = router