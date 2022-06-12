import React from "react";
import {Link} from "react-router-dom";
import s from "./Notfoundpage.module.css";


const Notfoundpage = () => {
    return (
        <div className={s.text}>
            <div>
                Что-то пошло не так. Данной страницы не существует. 
            </div>
            <div>
                <Link to="/">На главную страницу</Link>
            </div>
        </div>
    )
}
export default Notfoundpage;