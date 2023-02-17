const express = require('express')
const router = express.Router()
const {getAllBooks,addBook,updateBook,deleteBook, singleBook} = require('../controllers/BookStore')
router.get("/:id",singleBook)
router.get("/",getAllBooks)
router.patch("/:id",updateBook)
router.delete("/:id",deleteBook)
router.post("/",addBook)
module.exports = router