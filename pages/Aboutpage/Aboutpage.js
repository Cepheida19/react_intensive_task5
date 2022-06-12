import React from "react";
import s from "./Aboutpage.module.css";


const Aboutpage = () => {

    return (
        <div className={s.wrap}>
            <h2>О нас:</h2>
            <div className={s.info}>
                <dl>
                    <dt>Мы находимся по адресу:
                        <dd>г.Санкт-Петербург, ул.Замурчатова, д.1</dd>
                    </dt>
                    <dt>Контакты:
                        <dd>
                            Телефон для связи: +7(777)777-77-77
                        </dd>
                        <dd>
                            Почта: mur@mail.ru
                        </dd>
                    </dt>
                </dl>
            </div>
            
        </div>
    )
}
export default Aboutpage;