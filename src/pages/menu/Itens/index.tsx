import style from "./Itens.module.scss";
import Iten from "./itens.json";
import { Item } from "./item";

export function Itens() {
    return(
        <div className={style["section-itens"]}>
            {Iten.map((item) => (
                <Item
                    key={item.id}
                />
            ))}
        </div>
    );
}