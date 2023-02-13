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


module.exports = {getAllBooks, addBook}