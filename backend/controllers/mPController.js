const Mp = require('../models/Mp')
const ajoutMp =async (req,res)=> {
 const {designation} = req.body;
 try {
     let mp = new Mp({designation})
   Mp.create({designation})
    await mp.save()
    res.send(mp)
 } catch (error) {
    return res.status(400).json([{ msg: "article existant" }]);
 }
}
const supMp =async (req,res)=> {
try {
    const mpID = req.params.id 
   const mat = await Mp.findByIdAndDelete(mpID)
   res.send(mat)
} catch (error) {
    res.status(404).joson([{msg:'mp inexistante'}])
}
}
const updMp = async(req,res)=>{
try {

    const mpID=req.params.id
   const mat= await Mp.findByIdAndUpdate(mpID,{...req.body },{new:true})
   res.send(mat)
} catch (error) {
    return res.status(404).json([{msg:'mise a jour non abouti'}])
}
}
const getMp = async(req,res)=>{
try {
    const mat= await Mp.find()
    res.send(mat)
} catch (error) {
    
}
}
module.exports={getMp,updMp,supMp,ajoutMp}