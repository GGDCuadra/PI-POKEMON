import React from "react";
import { useParams } from "react-router-dom";
import style from './Detail.module.css';
import { useSelector } from "react-redux";

const Detail = () => {
    const { id } = useParams();

    const allPokemons = useSelector((state) => state.allPokemons);
    const pokemonDetail = allPokemons.find((poke) => poke.id == id);

    return (
        <div className={style.cardContainer}>
            {
                pokemonDetail ? (
                    <div className={style.card}>
                        <div className={style.infoContainer}>
                            <h1>{pokemonDetail.name}</h1>
                            <p>{`Hp: ${pokemonDetail.hp}`}</p>
                            <p>{`Attack: ${pokemonDetail.attack}`}</p>
                            <p>{`Defense: ${pokemonDetail.defense}`}</p>
                            <p>{`Speed: ${pokemonDetail.speed}`}</p>
                            <p>{`Height: ${pokemonDetail.height}`}</p>
                            <p>Types: {pokemonDetail.types ? pokemonDetail.types.map(type => type.name).join(', ') : pokemonDetail.Types.map(type => type.name).join(', ')}</p>
                        </div>

                        <img className={style.img} src={pokemonDetail.image} alt={pokemonDetail.name} />
                    </div>
                ) : null
            }
        </div>
    );
}

export default Detail;