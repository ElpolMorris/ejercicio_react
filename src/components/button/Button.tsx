import React from 'react'
import styles from "./Button.module.css"
interface Props {
    children?:  React.ReactChild    | React.ReactChild[];
    color: string;
    typeButton?: 'submit' | 'button';
    action?: any;
}

const Button = (props: Props) => {
    return (
        <button onClick={props.action} type={props.typeButton || "button"} className={`${styles.btn} ${styles[`btn-${props.color}`]}`}>
            {props.children}
        </button>
    )
}

export default Button
