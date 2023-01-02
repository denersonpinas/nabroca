import style from "./filter.module.scss";
import filters from "./filter.json";
import classNames from 'classnames';

import Pastas from "assets/filter/spaguetti.png";
import Meat from "assets/filter/meat.png";
import Salad from "assets/filter/salad.png";
import Combos from "assets/filter/combo.png";

type IOpcao = typeof filters[0]

interface Props {
    filter: number | null,
    setFilter: React.Dispatch<React.SetStateAction<number | null>>
}

export function Filter({ filter, setFilter }: Props) {

    const images = [Pastas, Meat, Combos, Salad]

    function selectFilter(opcao: IOpcao) {
        if(filter == opcao.id) return setFilter(null);
        return setFilter(opcao.id)
    }

    return(
        <div className={style["section-filters"]}>
            {filters.map((option) =>
                    <button 
                        key={option.id} 
                        className={classNames({
                            [style["section-filters__filter"]]: true,
                            [style["section-filters__filter--active"]]: filter === option.id
                        })}
                        onClick={() => selectFilter(option)}>
                        <img src={images[option.id -1]} alt="text" className={style["section-filters__filter__img"]}/>
                        {option.label}
                    </button>
            )}
        </div>
    );
}