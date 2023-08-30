import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { orderPokemons } from '../../redux/actions';
import style from './OrderPokemons.module.css'; // Asegúrate de importar el archivo CSS

const OrderPokemons = () => {
  const dispatch = useDispatch();
  const [orderType, setOrderType] = useState('asc');
  const [orderBy, setOrderBy] = useState('name'); // Nombre por defecto

  const handleOrderChange = (event) => {
    const newOrderType = event.target.value;
    setOrderType(newOrderType);
    dispatch(orderPokemons(newOrderType, orderBy));
  };

  const handleOrderByChange = (event) => {
    const newOrderBy = event.target.value;
    setOrderBy(newOrderBy);
    dispatch(orderPokemons(orderType, newOrderBy));
  };

  return (
    <div className={style.orderContainer}>
      <div className={style.selectGroup}>
        <label htmlFor="orderType" className={style.label}>Sort by:</label>
        <select id="orderType" value={orderType} onChange={handleOrderChange} className={style.select}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <div className={style.selectGroup}>
        <label htmlFor="orderBy" className={style.label}>Sort by field:</label>
        <select id="orderBy" value={orderBy} onChange={handleOrderByChange} className={style.select}>
          <option value="name">Name</option>
          <option value="attack">Attack</option>
        </select>
      </div>
    </div>
  );
};

export default OrderPokemons;