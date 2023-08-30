import { useState } from 'react';
import { useSelector } from 'react-redux';
import style from './Nav.module.css'
import { Link } from 'react-router-dom';

const Nav = ({ onSearchResults }) => {
    const allPokemons = useSelector(state => state.allPokemons);
    const [name, setName] = useState('');

    const handlOnSearch = async (name) => {
        try {
            const pokemonName = name.toLowerCase();
            const isExistPokemon = allPokemons.find(pokemon => pokemon.name === pokemonName);

            if (isExistPokemon) {

                onSearchResults([isExistPokemon]);
            } else {
                alert('Ese Pokémon no se encuentra.');
                onSearchResults([]);
            }
        } catch (error) {
            console.error(error.message);
        }
    };

    const handleChange = (event) => {
        setName(event.target.value);
    };

    return (
        <div className={style.navContainer}>
            <input className={style.navSearchInput} type="search" onChange={handleChange} value={name} placeholder="Search Pokemon" />
            <button className={style.navSearchButton} onClick={() => { handlOnSearch(name); setName('') }}>Search</button>
            <button><Link className={style.formButton} to={'/form'}>Create your Pokemon</Link></button>
        </div>
    );
};

export default Nav;