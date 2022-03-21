const mongoose = require("mongoose");

const booksSchema = new mongoose.Schema({

    likes : {type:Number, default:0},
    converImage : {type:String, required},
    constent : {type:String, required:true},
    
},{
    versionKey : false,
    timestamps : true
})

const Books = mongoose.model("books", booksSchema);

module.exports = Books;

