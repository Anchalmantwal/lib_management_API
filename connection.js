const mongoose = require("mongoose");

function connectMongoDb(url)
{mongoose.connect(url)
.then(() => {console.log("Connected to the database.");})
.catch((error) => {console.log("Cannot connect because of error",error)});
}


module.exports = {
    connectMongoDb,
};
