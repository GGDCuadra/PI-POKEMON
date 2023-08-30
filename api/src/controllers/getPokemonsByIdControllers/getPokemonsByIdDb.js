const {Pokemon, Type} = require('../../db')

const getPokemonByIdDB = async (id) => {
    try {
        const getPokemon  = await Pokemon.findOne({
        where : {
            id:id
        },
        include: {
            model:Type,
            attributes: ['name']
        }
    });
    return getPokemon;
    } catch (error) {
        throw error;
    }
    
}

module.exports= {
    getPokemonByIdDB
}