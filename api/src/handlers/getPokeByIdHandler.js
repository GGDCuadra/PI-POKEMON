const { getPokeById } = require('../controllers/getPokemonsByIdControllers/getPokeByIdApi');
const { getPokemonByIdDB } = require('../controllers/getPokemonsByIdControllers/getPokemonsByIdDb');

const getPokeByIdHandler = async (req, res) => {
    try {
        let pokemon;
        const {id} = req.params;
        if(isNaN(id)) {
             pokemon = await getPokemonByIdDB(id);
        }
        pokemon = await getPokeById(id);
        
        if(pokemon) {
          return res.status(200).json(pokemon)
        }
        
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}
module.exports = {
    getPokeByIdHandler
}