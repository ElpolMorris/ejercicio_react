import React from 'react'
import FormRegister from '../../components/form-register/FormRegister'
import styles from "./Register.module.css"

interface Props {
    title: string
}



const Register = (props: Props) => {
    return (
        <div className={styles.flex}>
            <h1 className={styles["margin-nav"]}>{props.title}</h1>
            <FormRegister />
        </div>
    )
}

export default Register
