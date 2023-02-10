const mongoose = require('mongoose');
const BookStore = new mongoose.Schema({
    author:{
        type: String,
        required: [true,'Must provide Author'],
        trim:true,
        minlength:3,
        maxlength:[80, 'Author cannot be more than 20 characters']
    }, 
    Title:{
        type: String,
        required: [true,'Must provide title'],
        trim:true,
        minlength:3
    }, 
    date:{
        type: Date,
        default:Date()
    },
    total_pages:{
        type:Number,
        require:[true,"Must provide number of pages"]
    },
    rating:{
        type: Number,
        required:false
    },
    publisher:{
        type:String,
        required:false,
        minlength:3

    }
    
})
module.exports = mongoose.model('BookStore',BookStore)