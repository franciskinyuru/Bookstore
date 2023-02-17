const express = require('express')
const router = express.Router()
const {getAllBooks,addBook,updateBook,deleteBook} = require('../controllers/BookStore')

<<<<<<< HEAD
//router.route('/bookstore').get(getAllBooks).post(addBook)
router.post("/bookstore",addBook)
router.get("/bookstore",getAllBooks)
=======
router.route('/bookstore').get(getAllBooks).post(addBook)
router.route('/bookstore/:id').patch(updateBook).delete(deleteBook)
// router.route('/bookstore/:title').delete(deleteBook)
>>>>>>> 10eb057e87e8e2620ad0c4b576d5d9ab203aaf81
module.exports = router