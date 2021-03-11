const {delete_phase,get_phase,post_phase,put_phase} =require('../controllers/phaseController')
const express= require('express')
const Router = express.Router()
Router.get('/getphase',get_phase)
Router.post('/postphase',post_phase)
Router.put('/putphase',put_phase)
Router.delete('/deletephase',delete_phase)

module.exports=Router