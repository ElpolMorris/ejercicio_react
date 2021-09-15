import React from 'react'
import useInput from '../../hooks/use-input/useInput'
import Button from '../button/Button'
import styles from "./FormLogin.module.css"
import { loginThunk } from "../../store/login/thunks"
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
const FormLogin = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [username, setUsername] = useInput("")
    const [password, setPassword] = useInput("")

    const handleSubmit: any = (e: any) => {
        e.preventDefault()
        if(username === "admin" || username === "pmorales.contacto@gmail.com"){

            dispatch(loginThunk({ username, password }))
            history.push("/admin")
        }else {
            dispatch(loginThunk({ username, password }))
            history.push("/dashboard")
        }



    }
    return (
        <form onSubmit={handleSubmit} className={styles["form-style"]}>
            <div className={styles["form-group"]}>
                <label>Username</label>
                <input type="text" value={username} onChange={setUsername} />
            </div>
            <div className={styles["form-group"]}>
                <label>Password</label>
                <input type="password" value={password} onChange={setPassword} />
            </div>
            <div className={styles.center}>
                <Button typeButton='submit' color="primary">
                    Enviar
                </Button>
            </div>
        </form>
    )
}

export default FormLogin
