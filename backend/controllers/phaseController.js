const Phase = require('../models/Phase')
exports.get_phase=async(res,req)=>{
    try {
        let phases= await Phase.find()
        res.send(phases)
    } catch (error) {
        res.status(400).json([{msg:'phases not found '}])
        
    }
}
exports.post_phase=async(req,res)=>{
    const {numero,nom,post,empl_name}=req.body
    try {
        let phas = new Phase({numero,nom,post,empl_name})
        const pas= await   phas.save().populate()
         res.send(pas)
    } catch (error) {
        res.status(400).json([{msg:'bad request '}])
    }
}
exports.put_phase=async(res,req)=>{
    const phasID=req.params.id
    try {
        let phas = await Phase.findByIdAndUpdate(phasID,{...req.body},{new:true})
      
         res.send(phas)
    } catch (error) {
        res.status(400).json([{msg:'update error'}])
    }
}
exports.delete_phase=async(res,req)=>{
    const phasID=req.params.id
    try {
        let phas = await Phase.findByIdAndDelete(phasID)
      
         res.send(phas)
    } catch (error) {
        res.status(400).json([{msg:'delete error'}])
    }
}