const { postPokemonController } = require('../controllers/postNewPokemonControllers/postPokemon');
const { Type } = require('../db');

const postPokemonsHandler = async (req, res) => {
  try {
    const { name, image, hp, attack, defense, speed, height, types } = req.body;

    if (!name || !image || !hp || !attack || !defense || !speed || !height || !types) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const pokemonData = {
      name,
      image,
      hp,
      attack,
      defense,
      speed,
      height,
      types, 
      isDb: true,
    };

    const newPokemon = await postPokemonController(pokemonData);

    return res.status(201).json(newPokemon);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  postPokemonsHandler
};

