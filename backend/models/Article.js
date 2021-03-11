const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const articleSchema = new Schema({
  designation: { type: String, required: true },
  famille: { type: String, required: true },
  maille: { type: String, required: true },
  barport: { type: String, required: true },
  bartrans:{type:String,required:true}
});
module.exports = mongoose.model("Article", articleSchema);
