const Article = require("../models/Article");
const Create_art = async (req, res) => {
  const { designation, famille, maille,barport,bartrans } = req.body;
  //  check if the user is already exist
  try {
    let article = await Article.findOne({ designation });
    if (article) {
      return res.status(400).json([{ msg: "article existant" }]);
    }
    // create new article
    article = new Article({ designation, famille, maille,barport,bartrans });

    // save the article
    await article.save();

    res.send({
      article,
    });
  } catch (error) {
    console.log(error);
  }
};
const Read_art =  async (req,res)=>{
  try {
    const articles= await Article.find()
    res.send(articles)
  } catch (error) {
    res.status(404).json(erorr)
  }
  
  
}
const Update_art =  async (req,res)=>{
  const Art_id=req.params.id
  try {
    const articles= await Article.findByIdAndUpdate(Art_id,{...req.body},{new:true})
    res.send(articles)
  } catch (error) {
    res.status(404).json(erorr)
  }
  
  
}
const Delete_art=async(req,res)=>{
  const Art_id=req.params.id
  try {
    const articles=await Article.findByIdAndDelete(Art_id)
    res.send(articles)
  } catch (error) {
    res.status(400).json(error)
  }
}
module.exports = { Create_art,Read_art,Update_art,Delete_art };
