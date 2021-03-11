const mongoose = require('mongoose')
const Schema=mongoose.Schema
const phaseSchema = new Schema({
    numero :{type: String, required:true},
    nom : {type :String , required : true},
    post :{type:String , required : true},
    empl_name :  { type: Schema.Types.ObjectId, ref: 'Employe' }
})
module.exports=mongoose.model('Phase',phaseSchema)