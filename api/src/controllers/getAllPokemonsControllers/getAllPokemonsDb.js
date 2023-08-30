const {Pokemon, Type} = require('../../db')

// Función para obtener todos los Pokémon de la base de datos
const getAllPokemonsFromDB = async () => {
    try {
      //incluimos el modelo PokemonType
      const pokemonsFromDB = await Pokemon.findAll({
        include: {
          model: Type,
          attributes: ['name']
        }
      });
      return pokemonsFromDB;
    } catch (error) {
      return error
    }
  };
  
  module.exports = {
    getAllPokemonsFromDB
  };