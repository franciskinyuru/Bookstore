require('dotenv').config()
const express = require('express')
const app = express()
const connectDB = require('./db/connect')
const BookStoreRouter = require('./routes/BookStore')

app.use(express.json())

app.use('/api/v1',BookStoreRouter)
const PORT = process.env.PORT || 9000

const start = async()=>{
    await connectDB(process.env.MONGO_URL)
    app.listen(PORT, ()=>{
        console.log(`Server listening to port ${PORT} ...`);
    })
} 

start()