const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { findOne } = require("../models/User");
const register = async (req, res) => {
  const { name, Last_name, email, password } = req.body;
  //  check if the user is already exist
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json([{ msg: "user is already exist" }]);
    }
    // create new user
    user = new User({ name, Last_name, email, password });
    //hash the password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    // save the user
    await user.save();
    //login to user
    const payload = { userID: user._id };
    const token = jwt.sign(payload, process.env.SECRET);
    res.send({
      token,
      user: {
        name: user.name,
        Last_name: user.Last_name,
        email: user.email,
        _id: user._id,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
//reauthentification
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json([{ msg: "please verify your mail adress " }]);
    }
    const ismatch = await bcrypt.compare(password, user.password);
    if (!ismatch) {
      return res.status(400).json([{ msg: "wrong password" }]);
    }
    const payload = { userID: user._id };
    const token = jwt.sign(payload, process.env.SECRET);
    res.send({
      token,
      user: {
        name: user.name,
        Last_name: user.Last_name,
        email: user.email,
        _id: user._id,
      },
    });
  } catch (error) {
      console.log({error : error})
  }
};
const getAuthUser=(req,res)=>{
    res.send({user:req.user})
}


module.exports = { register,login,getAuthUser };
