const { Router } = require('express');
const pokemonsRouter = Router();

const { getPokeByNameHanlder } = require('../handlers/getByNameHandler')
const { getPokeByIdHandler } = require('../handlers/getPokeByIdHandler');
const { getAllPokeHandler} = require('../handlers/getAllPokeHandler');
const { postPokemonsHandler } = require('../handlers/postPokemonHandler')


pokemonsRouter.get('/', getAllPokeHandler);

pokemonsRouter.get('/name', getPokeByNameHanlder)

pokemonsRouter.get('/:id', getPokeByIdHandler)

pokemonsRouter.post('/', postPokemonsHandler )

module.exports = pokemonsRouter