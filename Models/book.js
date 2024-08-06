const mongoose = require("mongoose");

//created schema
const bookSchema = mongoose.Schema({
    book_name:{
        type: String,
        required: true,
        unique: true,
    },
    author_name:{
        type: String,
        required: true,
    },
    published_year:{
        type: Number,
        required: true,
    },
})
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
