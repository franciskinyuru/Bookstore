const express = require('express')
const router = express.Router()
const {getAllBooks,addBook,updateBook,deleteBook, singleBook} = require('../controllers/BookStore')
router.post("/",addBook)
router.get("/",getAllBooks)
router.delete("/:id",deleteBook)
router.patch("/:id",updateBook)
router.get("/:id",singleBook)

module.exports = router