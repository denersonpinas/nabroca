import style from "./Menu.module.scss";
import {ReactComponent as Logo} from "assets/logo.svg"
import { Search } from "./search";
import { useState } from "react";
import { Filter } from "./filter";
import { Order } from "./order";
import { Itens } from "./Itens";
import { Hour } from "./hour";
 
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
                <Hour />
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
                <Itens 
                    search={search}
                    filter={filter}
                    order={order}
                />
            </section>
        </main>
    );
}