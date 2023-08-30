const { getAllPokemonsApi } = require("../controllers/getAllPokemonsControllers/getAllPokemonsApi");
const { getAllPokemonsFromDB } = require("../controllers/getAllPokemonsControllers/getAllPokemonsDb");

const getAllPokeHandler = async (req, res) => {
    try {
        const apiPokemons = await getAllPokemonsApi();
        const dbPokemons = await getAllPokemonsFromDB();
        if (!apiPokemons || !dbPokemons) {
            throw Error ("No se encontraron pokemones")
        }
        const pokemonsApiDb = await [...apiPokemons, ...dbPokemons]
        return res.status(200).json(pokemonsApiDb)
    } catch (error) {
        return res.status(404).json({error: error.message})
    }
}

module.exports = {
    getAllPokeHandler
}