const URL = "https://pokeapi.co/api/v2/pokemon/"
const axios = require('axios');

const getPokeById = async (id) => {
    try {
        const { data: pokeapi } = await axios(`${URL}${id}`)

        const hp = pokeapi.stats[0].base_stat;
        const attack = pokeapi.stats[1].base_stat;
        const defense = pokeapi.stats[2].base_stat;
        const speed = pokeapi.stats[5].base_stat;
        
        const pokemon = {
            id: pokeapi.id,
            name: pokeapi.name,
            image: pokeapi.sprites.front_default, 
            hp: hp,
            attack: attack,
            defense: defense,
            speed: speed,
            height: pokeapi.height,
            types: pokeapi.types.map(type => ({name: type.type.name}))
        }
        return pokemon

        
    } catch (error) {
        throw error
    }
}

module.exports = {
    getPokeById
}