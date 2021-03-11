const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mpSchema = new Schema({
  designation: { type: String, required: true }
  
});
module.exports = mongoose.model("Mp", mpSchema);
