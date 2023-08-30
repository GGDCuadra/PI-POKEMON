const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
/* const { getPokeById } = require('../controllers/getPokeById'); */
const  pokemonsRouter = require('./pokemonsRoutes');
const typeRouter = require('./pokemonTypesRoutes');
/* const { searchPokemonByName } = require('../controllers/getPokemonsByName'); */


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/pokemons', pokemonsRouter)
router.use('/types', typeRouter)


module.exports = router;
