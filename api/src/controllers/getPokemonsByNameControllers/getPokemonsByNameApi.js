const axios = require('axios');
const POKEAPI_URL = 'https://pokeapi.co/api/v2/pokemon/';

const getPokeByName = async (name) => {
    try {

        //Si no hay nada en la db bucamos en la api
        const { data} = await axios(`${POKEAPI_URL}${name}`);
        
        const pokemon = {
            id: data.id,
            name: data.name,
            image: data.sprites.front_default,
            life: data.stats[0].base_stat,
            attack: data.stats[1].base_stat,
            defense: data.stats[2].base_stat,
            speed: data.stats[5].base_stat,
            height: data.height,
            types: data.types.map(type => ({name: type.type.name}))
        };

        return pokemon;
    } catch (error) {
        throw Error(error)
    }
    const contry = data.includes(name)
    
};

module.exports = {
    getPokeByName
};