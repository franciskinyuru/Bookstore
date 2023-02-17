const BookStore = require('../models/bookstore')

const getAllBooks = async(req, res)=>{
    try {
        const books= await BookStore.find({})
    if (!books) {
        res.status(200).json({msg:"No Books available"})
    }
    else{
        res.status(200).json({books})
    }
    } catch (error) {
        res.status(500).json({error})
    }
    
}

const addBook = async(req, res)=>{
   try {
    const data = req.body
    const books = await BookStore.create(data)
    if(!books){
        res.status(500).json({msg:"Failed to add book"})
    }
    else{
        res.status(201).json({books})
    }

   } catch (error) {
    res.status(500).json({error})
   }}

const updateBook = async (req, res) => {
    try {
        const {id:bookId} = req.params;
    const book = await BookStore.findOneAndUpdate({_id:bookId},req.body,{new:true, runValidators: true})
    if (!book) {
        res.status(200).json({msg: `No book with id ${bookId} found`})
    }else{
        res.status(200).json({book})
    }
 
} catch (error) {
    res.status(500).json({error}) 
    
}}

const deleteBook = async (req, res) => {
    try {
        const{id:bookId} = req.params
        const book = await BookStore.findByIdAndDelete({_id:bookId})
        if (!book) {
            res.status(200).json({msg: `No book with id ${bookId}`})
        }
        res.status(200).json({msg:"Book Deleted Successfully" })

    } catch {
        res.status(500).json({error})
    }
}

const singleBook = async (req, res) => {
    try {
        const{id:bookId} = req.params
    const book = await BookStore.findOne({_id:bookId})
    if (!book) {
        res.status(200).json({msg: `No book with id ${bookId}`})
    }
    res.status(200).json({ book })
    } catch (error) {
        res.status(500).json({error})
    }
}

module.exports = {getAllBooks, addBook, updateBook, deleteBook, singleBook}