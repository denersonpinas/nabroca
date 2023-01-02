import style from "./Itens.module.scss";
import Iten from "./itens.json";
import { Item } from "./item";
import { useEffect, useState } from "react";

interface Props {
    search: string,
    filter: null | number,
    order: string
}

export function Itens( {filter, order, search} : Props) {

    const [list, setList] = useState(Iten);

    function testSearch(title: string) {
        const regex = new RegExp(search, "i");
        return regex.test(title)
    }

    function testFilter(id : number) {
        if(filter !== null) return filter === id;
        return true
    }

    function ordering(newList: typeof Iten) {
        switch(order) {
            case 'portion':
                return newList.sort((a, b) => a.size > b.size ? 1 : -1);
            
            case 'num_people':
                return newList.sort((a, b) => a.serving > b.serving ? 1 : -1);
            
            case 'price':
                return newList.sort((a, b) => a.price > b.price ? 1 : -1);
            
            default:
                return newList;
        }
    }

    useEffect(() => {
        const newList = Iten.filter(option => testSearch(option.title) && testFilter(option.category.id));
        setList(ordering(newList));

    }, [search, filter, order])

    return(
        <div className={style["section-itens"]}>
            {list.map((item) => (
                <Item
                    key={item.id}
                    {...item}
                />
            ))}
        </div>
    );
}