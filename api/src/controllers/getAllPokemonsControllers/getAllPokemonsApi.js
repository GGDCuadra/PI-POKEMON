let URL = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
const axios = require('axios')

const getAllPokemonsApi = async () => {
    let apiPokemons = await axios(`${URL}`)
    try {

        
        const actualsPokemons = apiPokemons.data.results
        
    
        
        const pokemons = actualsPokemons.map(async(pokemon) => {
            
          const {data} = await axios(pokemon.url);

            const stats = data.stats;
            const hp = stats[0].base_stat;
            const attack = stats[1].base_stat;
            const defense = stats[2].base_stat;
            const speed = stats[5].base_stat;

            return {
                id: data.id,
                name: data.name,
                image: data.sprites.front_default, 
                hp: hp,
                attack: attack,
                defense: defense,
                speed: speed,
                height: data.height,
                types: data.types.map(type => ({name: type.type.name}))
            }
        })
        const allPokemonData = await Promise.all(pokemons)
       return allPokemonData
       
    } catch (error) {
        throw error
    }
}

module.exports = {
    getAllPokemonsApi
}