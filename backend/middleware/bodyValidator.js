const {body,validationResult}=require('express-validator')
const registerRoutes = ()=>[
    body("name","name is required").notEmpty(),
    body("Last_name","Last_name is required").notEmpty(),
    body("email","please enter a valid adress mail ").isEmail().notEmpty(),
    body("password","password should contain at least 10 caracter and capital lettre").notEmpty().isLength({min:10,max:20})
]
const loginRoutes = ()=>[
    body("email","please enter a valid adress mail ").isEmail().notEmpty(),
    body("password","password should contain at least 10 caracter and capital lettre").notEmpty().isLength({min:10,max:20})
]
const validator =(req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json( errors.array().map(err=>({msg:err.msg})) );
    }
    else
    {
        next()
    }

}
module.exports={registerRoutes,loginRoutes,validator}