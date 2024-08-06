const express = require("express");
const {connectMongoDb} = require("./connection");

const userRouter = require("./Routes/book");

const app = express();
const PORT = 8001;

//Connecting mongoose
connectMongoDb("mongodb://127.0.0.1:27017/books-data");

//Middleware
app.use(express.json());

app.use("/", userRouter);

app.listen (PORT , () => {console.log(`Server has started on the port ${PORT}.`)});
