import React from 'react'
import Form from '../../components/form/Form'
import inputRegister from "../../content/content-json/formRegister.json"
import styles from "./Register.module.css"

interface Props {
    title: string
}



const Register = (props: Props) => {
    return (
        <div className={styles.flex}>
            <h1>{props.title}</h1>
            <Form inputs={inputRegister}/>
        </div>
    )
}

export default Register
