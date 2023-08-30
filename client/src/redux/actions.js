import { GET_POKEMONS, GET_POKEMON_BY_NAME, ORDER, FILTER_BY_TYPE,FILTER_BY_ORIGIN, CREATE_POKEMON, GET_TYPES  } from "./actions-types";
import axios from 'axios'

export const  getPokemons = () =>{
    const endpoint = 'http://localhost:3001/pokemons/'
    return async (dispatch) => {
        try {
            const {data} = await axios(endpoint);
            console.log(data)
            return dispatch({
                type: GET_POKEMONS,
                payload: data,
            })
        } catch (error) {
            console.error(error.message)
        }
    }
}

export const getPokemonByName = (name) => {
    const endpoint = `http://localhost:3001/pokemons/name?name=${name}`
    return async (dispatch) => {
        try {
            const {data} = await axios(endpoint)
            console.log(data);
            return dispatch({
                type :GET_POKEMON_BY_NAME,
                payload: data
            })
        } catch (error) {
            console.error(error.message); 
        }
    }
}

export const filterPokemon = (type) => {
    return{
        type: FILTER_BY_TYPE,
        payload: type
    }
} 
export const filterPokemonByOrigin = (origin) => {
    return {
        type: FILTER_BY_ORIGIN,
        payload: origin
    }
}

export const orderPokemons = (orderType, orderBy) => ({
    type: ORDER,
    payload: {
      orderType,
      orderBy,
    },
  });

  export const createPokemon = (newPokemon) =>{
    const endpoint = 'http://localhost:3001/pokemons'
    return async (dispatch) => {
        try {
            await axios.post(endpoint, newPokemon)
            alert("Has creado un nuevo pokemon")
            return dispatch ({
                type: CREATE_POKEMON,
                payload: await getPokemons() 
            })
        } catch (error) {
            console.error(error.message);
        }
    }
}

export const  getTypes = () =>{
    const endpoint = 'http://localhost:3001/types'
    return async (dispatch) => {
        try {
            const {data} = await axios(endpoint);
            console.log(data)
            return dispatch({
                type: GET_TYPES,
                payload: data,
            })
        } catch (error) {
            console.error(error.message)
        }
    }
}