const { getMp,updMp,supMp,ajoutMp } = require('../controllers/mPController')

const express = require('express')
const router = express.Router()
router.post('/AjoutMp',ajoutMp)
router.get('/getMp',getMp)
router.put('/updMp/:id',updMp)
router.delete('/supMp/:id',supMp)
module.exports=router