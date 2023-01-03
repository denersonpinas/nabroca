import style from "./filter.module.scss";
import filters from "./filter.json";
import classNames from 'classnames';

type IOpcao = typeof filters[0]

interface Props {
    filter: number | null,
    setFilter: React.Dispatch<React.SetStateAction<number | null>>
}

export function Filter({ filter, setFilter }: Props) {

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
                        <img src={option.photo} alt="text" className={style["section-filters__filter__img"]}/>
                        {option.label}
                    </button>
            )}
        </div>
    );
}