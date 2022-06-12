import React from "react";
import s from "./Basketpage.module.css";
import {useDispatch, useSelector} from "react-redux";
import { useOutletContext } from "react-router-dom";


const Basketpage = () => {
  const isLogin = useOutletContext();
  const dispatch = useDispatch();
  const products = useSelector(state => state.product); 


  const infoState  = products.map(product => [product.id, product.name, product.price, product.inBasket,
      product.inBasket * product.price]);
  const sum = products.map(product => product.inBasket * product.price);
  const totalSum = sum.reduce((itemSum, current) => itemSum + current, 0);

  const totals = products.map(product => product.total);
  const count = products.map(product => product.inBasket);

  const deletePosition = (index) => {
    dispatch({type: "DELETE_POSITION", payload: index});
  }

  const deleteAllPosition = () => {
    dispatch({type: "DELETE_ALL_POSITION", payload: 0});
  }
  const plusPosition = (index) => {
    if (isLogin && count[index] < totals[index]){
        dispatch({type: "PLUS_COUNT", payload: index});
    }
  }
  const minusPosition = (index) => {
    if (isLogin && count[index] > 0){
        dispatch({type: "MINUS_COUNT", payload: index});
    }
  }

    return (
        <div className={s.wrap}>
          <table>
            <tr>
              <th>ID товара</th>
              <th>Наименование товара</th>
              <th>Цена за 1 шт.</th>
              <th>Количество добавленного товара</th>
              <th>Общая сумма за данный товар</th>
              <th>Удалить товар</th>
            </tr>
            {((infoState.map(product => (product[3] > 0) ? <tr>
            <td>id= {product[0]}</td>
            <td>{product[1]}</td>
            <td>{product[2]} руб.</td>
            <td><button onClick={() => minusPosition(product[0])}>-</button> {product[3]} <button
               onClick={() => plusPosition(product[0])}>+</button></td>
            <td>{product[4]}  руб.</td>
            <td><button onClick={() => deletePosition(product[0])}>удалить</button></td>
            </tr> : <tr></tr>)))}
          </table>
          <div className={s.totalSum}>Всего товаров на сумму: {totalSum} руб.</div>
          <div className={s.basketButtons}>
            <button onClick={deleteAllPosition}>Очистить корзину</button>
            <button disabled>Оплатить</button>
          </div>
        </div>
    )
}
export default Basketpage;