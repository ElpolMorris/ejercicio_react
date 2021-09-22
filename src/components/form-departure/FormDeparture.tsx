import React, { useState } from 'react'
import PointContext from '../../context/pointContext'

import useInput from '../../hooks/use-input/useInput'
import Button from '../button/Button'
import Map from '../map/Map'
import styles from "./FormDeparture.module.css"
import { useDispatch } from 'react-redux'
import { createDeparture } from '../../store/departure-notice/departureThunks'
import { useSelectors } from '../../store/useSelectors'


const FormDeparture = () => {
    const username = useSelectors(state => state.departure.user.username)
    const [dateDeparture, setDateDeparture] = useInput("")
    const [dateReturn, setDateReturn] = useInput("")
    const [observations, setObservations] = useInput("")
    const [amountPersons, setAmountPersons] = useInput("")
    const [coords, setCoords] = useState<any>({lat:0,lng:0})
    const dispatch = useDispatch()
    const settingCoords = ({lat,lng}: any) => {
        setCoords({lat,lng})
    }
    const handleSubmit: any = (e: any) => {
        e.preventDefault()
        const allData = [dateDeparture,
            dateReturn,
            observations,
            amountPersons,
            coords.lat,
            coords.lng
            ].every(e => e)
        const verificationDate = new Date(dateDeparture) <= new Date(dateReturn)
        if(allData && verificationDate){
            const accessToken: any = localStorage.getItem("accessToken")
            dispatch(createDeparture(accessToken,username,{dateDeparture,
                dateReturn,
                observations,
                amountPersons,
                lat:coords.lat,
                long:coords.lng}))
            
        }else if(!verificationDate){
            alert("Ingrese bien las fechas")
            
        }else {
            alert("llene todos los campos de manera correcta")
        }
    }

    return (
       
        <PointContext.Provider value={
            {coords,settingCoords}
        }>

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
            <p className={styles.margin}>Haga click para elegir el punto de salida y doble click para eliminarlo</p>
            <ul>
                <li>
                    Latitud {coords.lat}
                </li>
                <li>
                    Longitud {coords.lng}
                </li>
            </ul>
            <Map />
            <div className={styles.center}>
                <Button typeButton='submit' color="primary">
                    Enviar
                </Button>
            </div>
        </form>
        </PointContext.Provider>
    )
}

export default FormDeparture
