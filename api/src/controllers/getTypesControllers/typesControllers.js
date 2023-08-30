const axios = require("axios");
const { Type } = require("../../db");
const URL = "https://pokeapi.co/api/v2/type";

const getTypeController = async () => {
  try {
    const existingTypes = await Type.findAll();

    if (existingTypes.length === 0) {
      const response = await axios.get(URL);
      const apiTypes = response.data.results;

      // Extraer solo el nombre y el id de cada tipo
      const typeNames = apiTypes.map((type) => ({
        name: type.name,
        id: parseInt(type.url.split('/').slice(-2, -1))
      }));
      console.log(typeNames);
      await Type.bulkCreate(typeNames);
      return typeNames;
    } else {
      return existingTypes;
    }
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getTypeController,
};