const express = require('express')
const router = express.Router()
const {getAllBooks,addBook,updateBook,deleteBook} = require('../controllers/BookStore')

//router.route('/bookstore').get(getAllBooks).post(addBook)
router.post("/bookstore",addBook)
router.get("/bookstore",getAllBooks)
router.delete("/bookstore",addBook)
router.patch("/bookstore/:id",addBook)
//router.route('/bookstore').get(getAllBooks).post(addBook)
router.route('/bookstore/:id').patch(updateBook).delete(deleteBook)
// router.route('/bookstore/:title').delete(deleteBook)
module.exports = router