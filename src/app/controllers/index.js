const mongodb = require("../db/connect");

const getAllProduct = async (req, res) => {
  try {
    const result = await mongodb.getDb().db().collection("products").find();
    result.toArray().then((lists) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(lists);
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getAllProduct,
};
