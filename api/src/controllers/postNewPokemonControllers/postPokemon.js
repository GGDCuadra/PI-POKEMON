const { Pokemon, Type } = require('../../db');
const { getTypeController } = require('../getTypesControllers/typesControllers');

const postPokemonController = async (pokemonData) => {
    try {
      // Obtiene los tipos completos desde la API y la base de datos local
      const types = await getTypeController();
  
      // Crea el Pokémon en la base de datos
      const newPokemon = await Pokemon.create(pokemonData);
  
      // Busca los tipos correspondientes por nombre
      const pokemonTypes = types.filter(type => pokemonData.types.includes(type.name));
  
      // Agregar los tipos obtenidos a la asociación
      await newPokemon.setTypes(pokemonTypes.map(type => type.id));
  
      return newPokemon; 
    } catch (error) {
      throw error;
    }
  };

module.exports = {
  postPokemonController 
};