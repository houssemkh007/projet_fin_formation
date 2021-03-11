const express =require('express')
const { register, login, getAuthUser } = require('../controllers/authController')
const { registerRoutes, validator, loginRoutes } = require('../middleware/bodyValidator')
const isAuth = require('../middleware/isAuth')
const router = express.Router()
router.post('/register',registerRoutes(),validator,register)
router.post('/login',loginRoutes(),validator,login)
router.get('/currentUser',isAuth,getAuthUser)
module.exports=router