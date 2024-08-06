const express = require("express");
const router = express.Router();
const {handleInsertBook, handleGetAllData, handleUpdateData, handleSelectSpecificData, handleDeleteData} = require("../Controllers/book");

//Route for POST to send data
router.post("/books", handleInsertBook)

//Route for GET to get data
router.get("/", handleGetAllData)

//Route to update the data
router.patch("/:_id", handleUpdateData)

//Route to get specific book data
router.get("/:_id", handleSelectSpecificData)

//Route to delete specific book data
router.delete("/:_id", handleDeleteData)

module.exports = router;
