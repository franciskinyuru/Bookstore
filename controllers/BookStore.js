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

const updateBook = async (req, res) => {
    const books = await BookStore.findById(req.params.id);
    Object.assign(books, req.body);
    books.save();
    res.status(201).json({ books });

    // res.send({ data: books });
}

const deleteBook = async (req, res) => {
    try {
        const bookDb = BookStore.deleteOne({ _id: req.params.id });
        res.status(204).json({msg:"Deleted successfully"});
    } catch {
        res.status(404).send({ error: "Book is not found! " });
    }
}

const singleBook = async (req, res) => {
    try {
        const bookDb = BookStore.findOne({ _id: req.params.id });
        res.status(204).json({bookDb});
    } catch {
        res.status(404).send({ error: "Book is not found! " });
    }
}

module.exports = {getAllBooks, addBook, updateBook, deleteBook, singleBook}