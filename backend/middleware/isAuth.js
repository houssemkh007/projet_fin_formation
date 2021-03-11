const jwt = require("jsonwebtoken");
const User = require("../models/User");
const isAuth = async (req, res, next) => {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    console.log(decoded);
    const user = await User.findById(decoded.userID);
    if (!user) {
      return res.status(401).json([{ msg: "unauthorized" }]);
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json([{ msg: "unauthorized" }]);
    //console.log("hottlo 7wija 3al faza ");
  }
};
module.exports = isAuth;
