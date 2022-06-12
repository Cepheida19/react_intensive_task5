import React from "react";
import { NavLink, Outlet} from "react-router-dom";
import s from "./Layout.module.css";
import Modal from "./../Modal/Modal";
import { useState } from "react";


const Layout = () => {
    const [modalActive, setModalActive] = useState(false);
    const [isLogin, setIsLogin] = useState(false);

    const changeAllActive = () => {
        if(!modalActive && !isLogin){
            setModalActive(true);
        } else if (isLogin && !modalActive) {
            setModalActive(false);
            setIsLogin(false);
        }
    }

    return (
        <div className={s.wrap}>
        <header className={s.navigation}>
            <NavLink className={s.item} to="/">Главная</NavLink>
            <NavLink className={s.item} to="/about">О магазине</NavLink>
            <NavLink className={s.item} to="/basket">Корзина</NavLink>
        </header>

        <div className={s.open}><input type="text" value={isLogin ? "Выйти" : "Войти"} onClick={changeAllActive}></input></div>

        <div className={s.modal}>
            <Modal active={modalActive} setActive={setModalActive} isLogin={isLogin} setIsLogin={setIsLogin}/>
        </div>

        <main className={s.container}>
            <Outlet context={isLogin}/>
        </main>
        
        <footer className={s.footer}>= 2022 =</footer>
        </div>
    )
}
export default Layout;