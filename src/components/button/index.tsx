import button from "./Button.module.scss";

interface Props {
    text?: string
}

export function Button( {text = "Click Here!"} : Props ) {
    return(
        <button className={button["btn"]}>
            text
        </button>
    );
}