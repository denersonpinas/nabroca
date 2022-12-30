import menu from "./Menu.module.scss";
import {ReactComponent as Logo} from "assets/logo.svg"
import { Search } from "./search";
import { useState } from "react";
import { CgPhone } from "react-icons/cg";
 
export function Menu() {

    const [search, setSearch] = useState("");

    return(
        <main className={menu["section-menu"]}>
            <nav className={menu["section-menu__menu-nav"]}>
                <Logo className={menu["section-menu__menu-nav__logo"]} />
                <Search
                    Search = {search}
                    setSearch = {setSearch}
                />
            </nav>
            <header className={menu["section-header"]}>
                <div className={menu["section-header__banner"]}>
                    <span className={menu["section-header__banner__text"]}>
                        A casa do código e da massa
                    </span>
                </div>
                <div className={menu["section-header__card"]}>
                    <nav className={menu["section-header__card__nav"]}>
                        <ul className={menu["section-header__card__nav__menu"]}>
                            <li className={menu["section-header__card__nav__menu__item"]}>Sun</li>
                            <li className={menu["section-header__card__nav__menu__item"]}>Mon</li>
                            <li className={menu["section-header__card__nav__menu__item"]}>Thi</li>
                            <li className={menu["section-header__card__nav__menu__item"]}>Fou</li>
                            <li className={menu["section-header__card__nav__menu__item"]}>Fif</li>
                            <li className={menu["section-header__card__nav__menu__item"]}>Fri</li>
                            <li className={menu["section-header__card__nav__menu__item"]}>Sat</li>
                        </ul>
                    </nav>
                    <div className={menu["section-header__card__content"]}>
                        <span className={menu["section-header__card__content__info-title"]}> Opening Hours </span>
                        <span className={menu["section-header__card__content__info-paragraph"]}>9:00 - 23:30</span>
                    </div>
                    <div className={menu["section-header__card__content"]}>
                        <span className={menu["section-header__card__content__info-title"]}> Preparation Time </span>
                        <span className="section-header__card__content__info-paragraph">9:00 - 23:30</span>
                    </div>
                    <hr className={menu["section-header__card__line"]} />
                    <div className={menu["section-header__card__info"]}>
                        <CgPhone 
                            size={20}
                            color="#101010"
                        />
                        <span> (00) 0 0000 - 0000 </span>
                    </div>
                </div>
            </header>
            <section className={menu["section-card"]}>
                <h2 className={menu["section-card__title"]}>Menu</h2>
            </section>
        </main>
    );
}