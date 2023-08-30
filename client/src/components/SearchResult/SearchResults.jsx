import React from 'react';
import Card from '../Card/Card'; 
import { Link } from 'react-router-dom';
import style from './SearchResults.module.css'; // Asegúrate de importar el archivo CSS

const SearchResults = ({ results }) => {
    return (
        <section className={style.searchResults}>
            {results.map(pokemon => (
                <Card
                    key={pokemon.id}
                    id={pokemon.id}
                    image={pokemon.image}
                    attack={pokemon.attack}
                    name={pokemon.name}
                    types={pokemon.types.map(type => type.name)}
                />
            ))}
             
        </section>
       
        
    );
};

export default SearchResults;