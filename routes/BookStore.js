const express = require('express')
const router = express.Router()
const {getAllBooks,addBook} = require('../controllers/BookStore')

//router.route('/bookstore').get(getAllBooks).post(addBook)
router.post("/bookstore",addBook)
router.get("/bookstore",getAllBooks)
module.exports = router