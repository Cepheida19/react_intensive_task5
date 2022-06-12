import React, { useEffect, useState } from "react";
import s from "./Modal.module.css";

const Modal = ({active, setActive, setIsLogin}) => {
    const trueLogin = "barsik";
    const truePassword = "12345";

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const [loginDirty, setLoginDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);

    const [loginError, setLoginError] = useState("введите логин");
    const [passwordError, setPasswordError] = useState("введите пароль");

    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if(loginError || passwordError){
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [loginError, passwordError])

    const loginHandler = (e) => {
        setLogin(e.target.value);
        if(e.target.value !== trueLogin){
            setLoginError("неверный логин");
        } else {
            setLoginError("");
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value);
        if(e.target.value !== truePassword){
            setPasswordError("неверный пароль");
        } else {
            setPasswordError("");
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name){
            case "login":
                setLoginDirty(true);
                break;
            case "password":
                setPasswordDirty(true);
                break;
        }
    }

    const changeActive = () => {
        setIsLogin(true);
        setActive(false);
    }

    return (
        <div className={active ? s.modal_active : s.modal}>
            <div className={s.modal_content} onClick={e => e.stopPropagation()}>
            <button className={s.close_button} onClick={() => {setActive(false)}} type="button">X</button>
                <div>
                    {(loginDirty && loginError) && <div className={s.error}>{loginError}</div>}
                    <input className={s.item} onChange={loginHandler} value={login} onBlur={blurHandler} name="login"
                        type="text" placeholder="введите логин"/>
                </div>
                <div>
                    {(passwordDirty && passwordError) && <div className={s.error}>{passwordError}</div>}  
                    <input className={s.item} onChange={passwordHandler} value={password} onBlur={blurHandler} 
                        name="password" type="password" placeholder="введите пароль"/>
                </div>
                <button disabled={!formValid} onClick={changeActive} type="submit">Вход</button>
            </div>
        </div>
    )
}
export default Modal;