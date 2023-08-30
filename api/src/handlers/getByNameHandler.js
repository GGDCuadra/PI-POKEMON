const { getPokeByName } = require('../controllers/getPokemonsByNameControllers/getPokemonsByNameApi')
const { getPokeByNameDb } = require('../controllers/getPokemonsByNameControllers/getPokemonByNameDb')

const getPokeByNameHanlder = async (req, res) => {
    try {
        const { name } = req.query;  
        if (!name){
        return res.status(401).json({message: 'Please provide a pokemon name'})
        };
        let pokemons = [];

        const pokemonApi = await getPokeByName(name);
        const pokemonDb = await getPokeByNameDb(name);

        if(pokemonApi) pokemons.push(pokemonApi)
        if(pokemonDb) pokemons.push(pokemonDb)
        
        if (pokemons.length === 0) {
            return res.status(404).json({ error: "Pokemon not found" });
        }
        return res.status(200).json(pokemons)
    } catch (error) {
        res.status(500).json({error : 'Error interno en el servidor', detail : error.message})
    }   
}
module.exports = {
    getPokeByNameHanlder
}