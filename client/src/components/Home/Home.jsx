import React, { useState } from 'react';
import SearchResults from '../SearchResult/SearchResults';
import Nav from '../Nav/Nav.jsx';
import Card from '../Card/Card.jsx';
import OrderPokemons from '../OrderPokemons/OrderPokemons';
import { useSelector, useDispatch } from 'react-redux';
import { filterPokemon, getPokemons,filterPokemonByOrigin } from '../../redux/actions.js';
import { useEffect } from 'react';
import style from './Home.module.css';

const Home = () => {
    const allPokemons = useSelector(state => state.allPokemons);
    const dispatch = useDispatch();
    const pageSize = 12;
    const [currentPage, setCurrentPage] = useState(1);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        dispatch(getPokemons()); 
    }, [dispatch]);

    const startIndex = (currentPage - 1) * pageSize;
   const visiblePokemons = searchResults.length > 0
    ? searchResults.slice(startIndex, startIndex + pageSize)
    : Array.isArray(allPokemons) 
        ? allPokemons.slice(startIndex, startIndex + pageSize)
        : [];
    const handlePageChange = newPage => {
        setCurrentPage(newPage);
    };

    const handleSearchResults = (results) => {
        setSearchResults(results);
    };
    
    const handleFilterType = (event) => {
        dispatch(filterPokemon(event.target.value))
    }
    const handleFilterOrigin = (event) => {
        const value = event.target.value;
        if (value === 'AllOrigins') {
            dispatch(getPokemons()); 
        } else {
            dispatch(filterPokemonByOrigin(value)); 
        }
    }
    
    return (
        <div className={style.homeContainer}>
            <Nav onSearchResults={handleSearchResults} />
            <div className={style.filters}>
                <select className={style.filterSelect} onChange={handleFilterType}>
                    <option value="AllTypes">All types</option>    
                    <option value="normal">Normal</option>    
                    <option value="fighting">Fighting</option>    
                    <option value="flying">Flying</option>    
                    <option value="poison">Poison</option>
                    <option value='ground'>Ground</option>    
                    <option value='rock'>Rock</option>    
                    <option value='bug'>Bug</option> 
                    <option value='ghost'>Ghost</option>    
                    <option value='steel'>Steel</option>    
                    <option value='fire'>Fire</option>    
                    <option value='water'>Water</option>    
                    <option value='electric'>Electric</option>    
                    <option value='psychic'>Psychic</option>    
                    <option value='ice'>Ice</option>
                    <option value='grass'>Grass</option>    
                    <option value='dragon'>Dragon</option>    
                    <option value='dark'>Dark</option>    
                    <option value='fairy'>Fairy</option>    
                    <option value='unknown'>Unknown</option>    
                    <option value='shadow'>Shadow</option>
                </select>
                <select className={style.filterSelect} onChange={handleFilterOrigin}>
                    <option value="AllOrigins">All origins</option>
                    <option value="DB">Database</option>
                    <option value="API">API</option>
                </select>
                <OrderPokemons />
            </div>
            {searchResults.length > 0 ? (
                <SearchResults results={searchResults} />
            ) : (
                <div className={style.cardsContainer}>
                    {visiblePokemons.map(pokemon => (
                        <Card
                            key={pokemon.id}
                            id={pokemon.id}
                            name={pokemon.name}
                            image={pokemon.image}
                            attack={pokemon.attack}
                            types={(Array.isArray(pokemon.types) ? pokemon.types : []).concat(
                                Array.isArray(pokemon.Types) ? pokemon.Types.map(type => type.name) : []
                              )}
                        />
                    ))}
                </div>
            )}
            <div className={style.pagination}>
            <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Anterior
                </button>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === Math.ceil(allPokemons.length / pageSize)}
                >
                    Siguiente
                </button>
            </div>
        </div>
    );
};

export default Home;