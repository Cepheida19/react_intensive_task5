import React from "react";
import {useParams} from "react-router-dom";
import s from "./Description.module.css";
import {useDispatch, useSelector} from "react-redux";
import { useOutletContext } from "react-router-dom";

const Description = () => {
    const isLogin = useOutletContext();
    const dispatch = useDispatch();
    const products = useSelector(state => state.product);

    const {id} = useParams();
    const infoState = products.map(product => [product.src, product.name, product.price, 
        product.description, product.total, product.inBasket, product.id]);
    const totals = products.map(product => product.total);
    const count = products.map(product => product.inBasket);

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
            <div className={s.product}>
                <div className={s.picture}>
                    <img src={infoState[id][0]}/>
                </div>
                <div className={s.description}>
                    <div><span className={s.item}>Наименование товара: </span>{infoState[id][1]}</div>
                    <div><span className={s.item}>Цена: </span>{infoState[id][2]} руб.</div>
                    <div><span className={s.item}>Подробное описание: </span>{infoState[id][3]}</div>
                    <div><span className={s.item}>В наличии: </span>{infoState[id][4]} шт.</div>
                    <div><span className={s.item}>В корзине: </span>{infoState[id][5]} шт.
                        <button onClick={() => minusPosition(infoState[id][6])}>-</button>
                        <button onClick={() => plusPosition(infoState[id][6])}>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Description;