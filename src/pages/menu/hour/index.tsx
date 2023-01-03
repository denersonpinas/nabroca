import { CgPhone } from "react-icons/cg";
import { ListDay } from "./listday";
import style from "./Hour.module.scss";
import { useState } from "react";

export function Hour() {
    const [day, setDay] = useState<number | null>(null);

    return (
        <div className={style["card"]}>
            <nav className={style["card__nav"]}>
                <ul className={style["card__nav__menu"]}>
                    <ListDay 
                        day={day}
                        setDay={setDay}
                    />
                </ul>
            </nav>
            <div className={style["card__content"]}>
                <span className={style["card__content__info-title"]}> Opening Hours </span>
                <span className={style["card__content__info-paragraph"]}>9:00 - 23:30</span>
            </div>
            <div className={style["card__content"]}>
                <span className={style["card__content__info-title"]}> Preparation Time </span>
                <span className="card__content__info-paragraph">9:00 - 23:30</span>
            </div>
            <hr className={style["card__line"]} />
            <div className={style["card__info"]}>
                <CgPhone
                    size={20}
                    color="#101010"
                />
                <span> (00) 0 0000 - 0000 </span>
            </div>
        </div>
    );
}