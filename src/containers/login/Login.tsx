import React from 'react'
import FormLogin from '../../components/form-login/FormLogin'
import styles from "./Login.module.css"

interface Props {
    title: string
}

const Login = (props: Props) => {
    return (
        <div className={styles.flex}>
            <h1>{props.title}</h1>
            <FormLogin />
        </div>
    )
}

export default Login
