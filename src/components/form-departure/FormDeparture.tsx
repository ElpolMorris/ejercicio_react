import React, { useState } from 'react'
import useInput from '../../hooks/use-input/useInput'
import Button from '../button/Button'
import styles from "./FormDeparture.module.css"
//import { useDispatch } from 'react-redux'


const FormDeparture = () => {
    const [dateDeparture, setDateDeparture] = useInput("")
    const [dateReturn, setDateReturn] = useInput("")
    const [observations, setObservations] = useInput("")
    const [amountPersons, setAmountPersons] = useInput("")
    const [lat, setLat] = useInput("")
    const [lang, setLang] = useInput("")

    const handleSubmit: any = (e: any) => {
        e.preventDefault()
        const allData = [dateDeparture,
            dateReturn,
            observations,
            amountPersons,
            lat,
            lang].every(e => e)
        const verificationDate = new Date(dateDeparture) <= new Date(dateReturn)
        if(allData && verificationDate){
            console.log({
                dateDeparture,
                dateReturn,
                observations,
                amountPersons,
                lat,
                lang
            })
        }else{
            alert("llene todos los campos de manera correcta")
        }
    }

    return (
        <form onSubmit={handleSubmit} className={styles["form-style"]}>
            <div className={styles["form-group"]}>
                <label>Fecha ida</label>
                <input type="date" value={dateDeparture} onChange={setDateDeparture} />
            </div>
            <div className={styles["form-group"]}>
                <label>Fecha Regreso</label>
                <input type="date" value={dateReturn} onChange={setDateReturn} />
            </div>
            <div className={styles["form-group"]}>
                <label>Detalles de la salida</label>
                <input type="text" value={observations} onChange={setObservations} />
            </div>
            <div className={styles["form-group"]}>
                <label>Cantidad de personas</label>
                <input type="number" value={amountPersons} onChange={setAmountPersons} />
            </div>
            <div className={styles.center}>
                <Button typeButton='submit' color="primary">
                    Enviar
                </Button>
            </div>
        </form>
    )
}

export default FormDeparture
