const express = require('express')
const router = express.Router()
const {getAllBooks,addBook,updateBook,deleteBook, singleBook} = require('../controllers/BookStore')
router.post("/bookstore",addBook)
router.get("/bookstore",getAllBooks)
router.delete("/bookstore/:id",deleteBook)
router.patch("/bookstore/:id",updateBook)
router.get("/bookstore/:id",singleBook)
module.exports = router