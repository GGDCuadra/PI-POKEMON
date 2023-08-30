const { getTypeController } = require("../controllers/getTypesControllers/typesControllers");

const getTypeHandler = async (req, res) => {
  try {
    const types = await getTypeController();
    return res.status(200).json(types);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getTypeHandler
};
