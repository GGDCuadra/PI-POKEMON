import { CREATE_POKEMON, FILTER_BY_ORIGIN, FILTER_BY_TYPE, GET_POKEMONS, GET_POKEMON_BY_NAME, GET_TYPES, ORDER } from "./actions-types";

const initialState = {
    allPokemons: [],
    pokemonName: [],
    AllPokemonsCopy: [],
    types: []
}



const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_POKEMONS:
            return {
                ...state,
                allPokemons: payload,
                AllPokemonsCopy: payload
            }
        case GET_POKEMON_BY_NAME:
            return {
                ...state,
                pokemonName: payload
            }
        case FILTER_BY_TYPE:
            if (payload === 'AllTypes') {
                return {
                    ...state,
                    allPokemons: state.AllPokemonsCopy
                };
            } else {
                const allPokemonsUpdated = state.AllPokemonsCopy.filter(pokemon =>
                    pokemon.types && pokemon.types.some(type => type.name === payload)
                );
                return {
                    ...state,
                    allPokemons: allPokemonsUpdated
                };
            }
        case FILTER_BY_ORIGIN:
            if (payload === 'AllOrigins') {
                return {
                    ...state,
                    allPokemons: state.AllPokemonsCopy
                };
            }
            if (payload === 'DB') {
                const filteredOriginPokemons = state.AllPokemonsCopy.filter(pokemon => pokemon.isDb);
                return {
                    ...state,
                    allPokemons: filteredOriginPokemons
                };
            }
            const filteredOriginPokemons = state.AllPokemonsCopy.filter(pokemon => !pokemon.isDb);
            return {
                ...state,
                allPokemons: filteredOriginPokemons
            }
        case ORDER:
            const { orderType, orderBy } = payload;
            const orderedPokemons = [...state.allPokemons];

            orderedPokemons.sort((a, b) => {
                if (orderBy === "name") {
                    return orderType === "asc"
                        ? a.name.localeCompare(b.name)
                        : b.name.localeCompare(a.name);
                } else if (orderBy === "attack") {
                    return orderType === "asc"
                        ? a.attack - b.attack
                        : b.attack - a.attack;
                }
                return 0; // Caso por defecto
            });
            return {
                ...state,
                allPokemons: orderedPokemons,
            };
        case CREATE_POKEMON:
            return {
                ...state,
                allPokemons: payload,
            };
        case GET_TYPES:
            return {
                ...state,
                types: payload,

            }
        default:
            return {
                ...state
            }
    }
}
export default reducer