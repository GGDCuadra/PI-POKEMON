import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPokemon, getTypes } from '../../redux/actions';
import style from './Form.module.css';
import validation from '../../validation/validationFrom';

const Form = () => {
  const dispatch = useDispatch();
  const types = useSelector(state => state.types);

  const [name, setName] = useState('');
  const [hp, setHp] = useState('');
  const [image, setImage] = useState('');
  const [attack, setAttack] = useState('');
  const [defense, setDefense] = useState('');
  const [speed, setSpeed] = useState('');
  const [height, setHeight] = useState('');
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  const handleTypeChange = (e) => {
    const selectedType = e.target.value;
    setSelectedTypes(prevTypes =>
      prevTypes.includes(selectedType)
        ? prevTypes.filter(type => type !== selectedType)
        : [...prevTypes, selectedType]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Realizar las validaciones aquí antes de enviar los datos
    const validationErrors = validation({
      name,
      hp,
      image,
      attack,
      defense,
      speed,
      height,
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newPokemon = {
      name,
      hp: parseInt(hp),
      image,
      attack: parseInt(attack),
      defense: parseInt(defense),
      speed: parseInt(speed),
      height: parseInt(height),
      types: selectedTypes,
    };

    dispatch(createPokemon(newPokemon));

    // Restablecer los campos del formulario después de crear el Pokémon
    setName('');
    setHp('');
    setImage('');
    setAttack('');
    setDefense('');
    setSpeed('');
    setHeight('');
    setSelectedTypes([]);
    setErrors({});
  };

  return (
    <div className={style.formContainer}>
      <h2>Create a New Pokemon</h2>
      <form className={style.form} onSubmit={handleSubmit}>
        <div>
          <label className={style.label} htmlFor="name">Name:</label>
          <input
          className={style.input}
            id="name"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          {errors.name && <span className={style.spanError}>{errors.name}</span>}
        </div>
        <div>
          <label className={style.label} htmlFor="hp">Hp:</label>
          <input
          className={style.input}
            id="hp"
            type="number"
            value={hp}
            onChange={e => setHp(e.target.value)}
          />
          {errors.hp && <span className={style.spanError}>{errors.hp}</span>}
        </div>
        <div>
          <label className={style.label} htmlFor="image">Image:</label>
          <input
          className={style.input}
            id='image' 
            type="text" 
            value={image} 
            onChange={(event) => setImage(event.target.value)}/>
            {errors.image && <span className={style.spanError}>{errors.image}</span>}
        </div>
        <div>
          <label className={style.label} htmlFor="attack">Attack:</label>
          <input 
          className={style.input}
          id='attack'
          type="number" 
          value={attack} 
          onChange={(event) => setAttack(event.target.value)}/>
          {errors.attack && <span className={style.spanError}>{errors.attack}</span>}
        </div>
        <div>
          <label className={style.label} htmlFor="defense">Defense:</label>
          <input
          className={style.input} 
          id='defense'
          type="number" 
          value={defense} 
          onChange={(event) => setDefense(event.target.value)}/>
          {errors.defense && <span className={style.spanError}>{errors.defense}</span>}
        </div>
        <div>
          <label className={style.label} htmlFor="speed">Speed:</label>
          <input
          className={style.input} 
          id='speed'
          type="number" 
          value={speed} 
          onChange={(event) => setSpeed(event.target.value)}/>
          {errors.speed && <span className={style.spanError}>{errors.speed}</span>}
        </div>
        <div>
          <label className={style.label} htmlFor="height">Height:</label>
          <input
          className={style.input} 
          id='height'
          type="number" 
          value={height} 
          onChange={(event) => setHeight(event.target.value)}/>
          {errors.height && <span className={style.spanError}>{errors.height}</span>}
        </div>
        <div>
          <label className={style.label} htmlFor="types">Types:</label>
          <select
          className={style.select}
            id="types"
            multiple
            value={selectedTypes}
            onChange={handleTypeChange}
          >
            {types.map(type => (
              <option className={style.input} key={type.id} value={type.name}>
                {type.name}
              </option>
            ))}
          </select>
        </div>

        <button className={style.submitButton}type="submit">Create Pokemon</button>
      </form>
    </div>
  );
};

export default Form