const express = require('express')
const router = express.Router()
const {getAllBooks,addBook,updateBook,deleteBook} = require('../controllers/BookStore')
router.post("/bookstore",addBook)
router.get("/bookstore",getAllBooks)
router.delete("/bookstore/:id",deleteBook)
router.patch("/bookstore/:id",updateBook)
module.exports = router