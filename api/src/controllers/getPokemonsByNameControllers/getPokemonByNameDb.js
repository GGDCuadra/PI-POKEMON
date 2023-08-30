const {Pokemon, Type} = require('../../db')

const getPokeByNameDb = async (name) =>{
    try {
        const getPoke = await Pokemon.finOne({
            where : {
                name : name
            }, 
            include: {
                model: Type,
                attributes: ["name"]
            }
        });
        return getPoke
    } catch (error) {
        return error
    }
}

module.exports = {
    getPokeByNameDb
}