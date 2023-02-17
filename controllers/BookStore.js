const BookStore = require('../models/bookstore')

const getAllBooks = async(req, res)=>{
    const books= await BookStore.find({})
    if (!books) {
        res.status(200).json({msg:"No Books available"})
    }
    else{
        res.status(200).json({books})
    }
}

const addBook = async(req, res)=>{
    const data = req.body
    const books = await BookStore.create(data)
    if(!books){
        res.status(500).json({msg:"Failed to add book"})
    }
    else{
        res.status(201).json({books})
    }
}


const getBook = async (req, res, next)=>{
    const{id:bookId} = req.params
    const book = await BookStore.findOne({_id: bookId})
    if (!book) {
        res.status(200).json({msg: `No book with id ${bookId}`})
    }
    res.status(200).json({ book })

}

const deleteBook = async (req, res)=>{
    const{id:bookId} = req.params
    const book = await BookStore.findByIdAndDelete({_id:bookId})
    if (!book) {
        res.status(200).json({msg: `No book with id ${bookId}`})
    }
    res.status(200).json({msg:"Book Deleted Successfully" })
}

const updateBook =async (req, res)=>{
    const {id:bookId} = req.params;
    const task = await BookStore.findOneAndUpdate({_id:bookId},req.body,{new:true, runValidators: true})
    if (!task) {
        res.status(200).json({msg: `No book with id ${bookId} found`})
    }
    res.status(200).json({task})
}


module.exports = {getAllBooks, addBook, getBook, deleteBook, updateBook}