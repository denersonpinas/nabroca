import style from "./Menu.module.scss";
import {ReactComponent as Logo} from "assets/logo.svg"
import { Search } from "./search";
import { useState } from "react";
import { CgPhone } from "react-icons/cg";
import { Filter } from "./filter";
import { Order } from "./order";
import { Itens } from "./Itens";
 
export function Menu() {

    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState<number | null>(null);
    const [order, setOrder] = useState("");

    return(
        <main className={style["section-menu"]}>
            <nav className={style["section-menu__menu-nav"]}>
                <Logo className={style["section-menu__menu-nav__logo"]} />
                <Search
                    Search = {search}
                    setSearch = {setSearch}
                />
            </nav>
            <header className={style["section-header"]}>
                <div className={style["section-header__banner"]}>
                    <span className={style["section-header__banner__text"]}>
                        A casa do código e da massa
                    </span>
                </div>
                <div className={style["section-header__card"]}>
                    <nav className={style["section-header__card__nav"]}>
                        <ul className={style["section-header__card__nav__menu"]}>
                            <li className={style["section-header__card__nav__menu__item"]}>Sun</li>
                            <li className={style["section-header__card__nav__menu__item"]}>Mon</li>
                            <li className={style["section-header__card__nav__menu__item"]}>Thi</li>
                            <li className={style["section-header__card__nav__menu__item"]}>Fou</li>
                            <li className={style["section-header__card__nav__menu__item"]}>Fif</li>
                            <li className={style["section-header__card__nav__menu__item"]}>Fri</li>
                            <li className={style["section-header__card__nav__menu__item"]}>Sat</li>
                        </ul>
                    </nav>
                    <div className={style["section-header__card__content"]}>
                        <span className={style["section-header__card__content__info-title"]}> Opening Hours </span>
                        <span className={style["section-header__card__content__info-paragraph"]}>9:00 - 23:30</span>
                    </div>
                    <div className={style["section-header__card__content"]}>
                        <span className={style["section-header__card__content__info-title"]}> Preparation Time </span>
                        <span className="section-header__card__content__info-paragraph">9:00 - 23:30</span>
                    </div>
                    <hr className={style["section-header__card__line"]} />
                    <div className={style["section-header__card__info"]}>
                        <CgPhone 
                            size={20}
                            color="#101010"
                        />
                        <span> (00) 0 0000 - 0000 </span>
                    </div>
                </div>
            </header>
            <section className={style["section-card"]}>
                <Filter 
                    filter={filter}
                    setFilter={setFilter}
                />
                <div className={style["section-card__order"]}>
                    <h2 className={style["section-card__title"]}>Menu</h2>
                    <Order
                        order={order}
                        setOrder={setOrder}/>
                </div>
                <Itens />
            </section>
        </main>
    );
}