const Employe = require("../models/Employe");
exports.get_emp = async (req, res) => {
  try {
    let empl = await Employe.find();

    res.send(empl);
  } catch (error) {
    res.status(404).json([{ msg: "employe noty found" }]);
  }
};
exports.post_empl = async (req, res) => {
  const { nom, prenom, fonction } = req.body;
  
  try {
    let empl = new Employe({ nom, prenom, fonction });
    // await Employe.create(empl)
    await empl.save();
    res.send(empl);
  } catch (error) {
    res.status(404).json([{ msg: "bad request " }]);
  }
};
exports.put_empl = async (req, res) => {
  const empID = req.params.id;
  try {
    const empl = await Employe.findByIdAndUpdate(
      empID,
      { ...req.body },
      { new: true }
    );
    res.send(empl);
  } catch (error) {
    res.status(404).json([{ msg: "error update " }]);
  }
};
exports.delete_empl = async (req, res) => {
  const empID = req.params.id;
  try {
    const empl = await Employe.findByIdAndDelete(empID);
    res.send(empl);
  } catch (error) {
    res.status(404).json([{ msg: "error delete " }]);
  }
};
