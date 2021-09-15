import React, { useState } from 'react'
import { useHistory } from 'react-router'
import useInput from '../../hooks/use-input/useInput'
import Button from '../button/Button'
import styles from "./FormRegister.module.css"

const FormRegister = () => {
    const history = useHistory()
    const [fullname, setFullname] = useInput("")
    const [password, setPassword] = useInput("")
    const [username, setUsername] = useInput("")
    const [phone, setPhone] = useInput("")
    const [emergengyContact, setEmergengyContact] = useInput("")
    const [born, setBorn] = useInput("")
    const [email, setEmail] = useInput("")
    const [gender, setGender] = useState("1")

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const allData = [username,
            email,
            password,
            fullname,
            born,
            gender,
            phone,
            emergengyContact].every(e => e)
        if (allData) {
            const data: object = {
                username,
                email,
                password,
                fullname,
                born,
                gender: +gender,
                role: 2,
                phone,
                emergengyContact,
            }
            try {
                const res: any = await fetch(`http://localhost:4000/register`, {
                    method: "post",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data)
                })
                const dataRes = await res.json()
                console.log(dataRes)
                alert("usuario creado exitosamente")
                history.push("/login")

            } catch (error) {
                console.log("error", error)
            }
        }else{

            alert("llene todos los campos")
        }
    }
    return (
        <form onSubmit={(e) => handleSubmit(e)} className={styles["form-style"]}>
            <div className={styles["form-group"]}>
                <label>Nombre de usuario</label>
                <input value={username} onChange={setUsername} />
            </div>
            <div className={styles["form-group"]}>
                <label>Nombre completo</label>
                <input value={fullname} onChange={setFullname} />
            </div>
            <div className={styles["form-group"]}>
                <label>Fecha de nacimiento</label>
                <input type="date" value={born} onChange={setBorn} />
            </div>
            <div className={styles["input-group"]}>
                <div>
                    <label>Género</label>
                </div>
                <div className={styles["input-radio"]}>
                    <div>
                        <label>Masculino</label>
                        <input type="radio" value={"1"} name="gender-name" onChange={() => setGender("1")} />
                    </div>
                    <div>
                        <label>Femenino</label>
                        <input type="radio" value={"2"} name="gender-name" onChange={() => setGender("2")} />
                    </div>
                    <div>
                        <label>Otr@</label>
                        <input type="radio" value={"3"} name="gender-name" onChange={() => setGender("3")} />
                    </div>
                </div>
            </div>
            <div className={styles["form-group"]}>
                <label>Numero de contacto</label>
                <input value={phone} onChange={setPhone} />
            </div>
            <div className={styles["form-group"]}>
                <label>Numero de emergencia</label>
                <input value={emergengyContact} onChange={setEmergengyContact} />
            </div>
            <div className={styles["form-group"]}>
                <label>Correo Electrónico</label>
                <input type="email" value={email} onChange={setEmail} />
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

export default FormRegister
