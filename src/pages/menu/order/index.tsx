import style from "./Order.module.scss";
import Options from "./option.json";
import classNames from "classnames";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import React, { useState } from "react";

interface Props {
    order: string;
    setOrder: React.Dispatch<React.SetStateAction<string>>
}

export function Order( {order, setOrder} : Props) {

    const [open, setOpen] = useState(false);
    const nameOrder = order && Options.find(option => option.value === order)?.name

    return(
        <button 
            className={classNames({
                [style["btn-order"]]: true,
            })}
            onClick={ () => setOpen(!open) }
            onBlur={() => setOpen(false)} >
            <span className={classNames({
                [style["btn-order__text"]]: true,
                [style["btn-order__text--active"]] : order !== ""
            })}>
                {nameOrder || "Order by:"}
                { open ? 
                    <MdKeyboardArrowUp 
                        size={20}
                        color="#101010"
                    />  
                : 
                    <MdKeyboardArrowDown 
                        size={20}
                        color="#101010" 
                    />}
            </span>
            <div className={
                classNames({
                    [style["btn-order__options"]] : true,
                    [style["btn-order__options--active"]]  : open
                })
            }>
                {Options.map( option => (
                    <div 
                        className={style["btn-order__options__option"]}
                        key={option.value}
                        onClick={() => setOrder(option.value)}>
                        {option.name}
                    </div>
                ))}
            </div>
        </button>
    );
}