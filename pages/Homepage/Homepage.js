import s from "./Homepage.module.css";
import { Link, useOutletContext } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import basketIMG from "./../../img/basket.png";


const Homepage = () => {
    const isLogin = useOutletContext();
    const dispatch = useDispatch();
    const products = useSelector(state => state.product); 

     const infoState  = products.map(product => [product.src, product.name, product.price]);
     
     const textBasketTrue = "добавить в корзину";
     const textBasketFalse = "Чтобы добавить товар в корзину, залогиньтесь";

     const totals = products.map(product => product.total);
     const count = products.map(product => product.inBasket);
     const prices = products.map(product => product.price);

    const plusCount = (index) => {
        let ind = index;
        if (isLogin && count[ind] < totals[ind]){
            dispatch({type: "PLUS_COUNT", payload: ind});
        } 
    }

     const sumProducts = count.reduce((countItem, current) => countItem + current, 0);
     const sumPrice1 = count.map((countPrice,index) => countPrice * prices[index]);
     const sumPrice = sumPrice1.reduce((countSum, current) => countSum + current, 0);
 
    return (

        <div className={s.wrap}>
            <header className={s.header}>
                <h2>магазин домиков для кошек</h2>
                <h2 className={s.name}>Лапки-царапки</h2>
            </header>
            <div className={s.products}>
                <div className={s.result}>В корзине {sumProducts} товара(ов) на сумму: {sumPrice} руб.</div>
                <div className={s.wrapItem}>
                    {infoState.map((product, index) => <div className={s.item}>
                        <div className={s.picture}><img src={product[0]}></img></div>
                        <div className={s.description}>
                            <div>
                                <Link className={s.name} to={`/${index}`}>{product[1]}</Link>
                            </div>
                            <div className={s.price}>цена: {product[2]} руб.</div>
                            <div><button onClick={() => plusCount(index)} type="button">{isLogin ? textBasketTrue : textBasketFalse}</button>
                            <input type="text" readOnly value={count[index]}/>
                            {(isLogin) ? 
                            <Link className={s.basket} to="/basket"><img src={basketIMG}/></Link> : <div></div>}
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}
export default Homepage;