const mongoose = require("mongoose");

const mongoKey = "mongodb://dacup72:password1@ds127293.mlab.com:27293/tododb";

mongoose.connect(mongoKey, { useNewUrlParser: true }, function (error) {
  if (error) {
    return console.log("the connection broke");
  } else {
    console.log("mongoose connection successful");
  }
});

module.exports = mongoose;