import style from "./Item.module.scss";
import menu from "../itens.json";
import classNames from "classnames";

type Props = typeof menu[0]

export function Item(
    {
        title, 
        description,
        photo,
        price,
        serving,
        size,
        category,
    } : Props
    ) {
    return(
        <div className={style["item"]}>
            <div className={style["item__image"]}>
                <img src={`${photo}`} alt={"Imagem de " + title} />
                <span className={classNames({
                    [style["item__type"]]: true,
                    [style[`item__type__${category.label.toLowerCase()}`]]: true
                })}>{category.label}</span>
            </div>
            <div className={style["item__descriptions"]}>
                <h2 className={style["item__title"]}>{title}</h2>
                <p className={style["item__text"]}>{description}</p>
                <div className={style["item__complements"]}>
                    <span className={style["item__portion"]}> Serves {serving} people{serving === 1 ? "" : "s"} </span>
                    <span className={style["item__weight"]}>{size}g</span>
                    <span className={style["item__price"]}> R$ {price.toFixed(2)} </span>
                </div>
            </div>
        </div>
    );
}