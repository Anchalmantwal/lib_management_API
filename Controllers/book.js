const Book = require("../Models/book");

function handleInsertBook(req,res){
    const body = req.body ;
    const book = new Book({
        book_name: body.book_name,
        author_name: body.author_name,
        published_year: body.published_year,
    })
    const newBook = book.save();
    res.status(200).send(book);
}

function handleGetAllData(req,res){
    Book.find({})
    .then(books => {res.status(200).send(books);})
    .catch(err => {console.log("Error is" , err)});
}

function handleUpdateData(req,res){
    const _id = req.params._id;
    const body = req.body;
    Book.findByIdAndUpdate( _id ,{
        book_name: body.book_name,
        author_name: body.author_name,
        published_year: body.published_year,
    },  { new: true })
    .then(book => res.send(book))
    .catch(err => console.log("The error is", err));
}

function handleSelectSpecificData(req,res) {
    const _id = req.params._id;
    Book.findById(_id )
    .then( book => res.send(book))
    .catch( err => console.log("The error is", err));
}

function handleDeleteData(req,res) {
    const _id = req.params._id;
    Book.findByIdAndDelete(_id)
    .then(() =>  res.send("Book is deleted"))
    .catch((err) => console.log("The error is", err));
}

module.exports = {
    handleInsertBook, handleGetAllData, handleUpdateData, handleSelectSpecificData, handleDeleteData
};
