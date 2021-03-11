const {delete_empl,get_emp,post_empl,put_empl} =require('../controllers/employeController')
const express = require('express')
const router = express.Router()
router.post('/ajoutEmploye',post_empl)
router.get('/getEmploye',get_emp)
router.put('/updatEmploye/:id',put_empl)
router.delete('/deletEmploye/:id',delete_empl)
module.exports=router