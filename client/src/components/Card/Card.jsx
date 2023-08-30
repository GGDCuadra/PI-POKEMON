import React from 'react';
import { Link } from 'react-router-dom';
import style from './Card.module.css';

const Card = ({ id, name, image, types, Types, attack }) => {
  return (
    <article className={style.card}>
      <Link to={`/detail/${id}`} className={style.link}>
        <div className={style.imageContainer}>
          <img className={style.image} src={image} alt={name} />
        </div>
        <div className={style.details}>
          <h2 className={style.name}>{name}</h2>
          <p className={style.attack}>Attack: {attack}</p>
          <div className={style.types}>
            {(types || Types).map((type, index) => (
              <span key={index} className={style.type}>
                {typeof type === 'string' ? type : type.name}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
};

export default Card;






