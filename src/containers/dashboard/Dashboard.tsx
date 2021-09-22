import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Button from '../../components/button/Button'
import FormDeparture from '../../components/form-departure/FormDeparture'

import { deleteDepartureThunks, getDeparture, getUserSession } from '../../store/departure-notice/departureThunks'
import { useSelectors } from '../../store/useSelectors'

import styles from "./Dashboard.module.css"



const Dashboard = () => {
    const dispatch = useDispatch()
    const departures = useSelectors(state => state.departure.data.departure)
    const username = useSelectors(state => state.departure.user.username)
    useEffect(() => {
        const accessToken: any = localStorage.getItem("accessToken")
        dispatch(getUserSession(accessToken))
    }, [dispatch])

    useEffect(() => {
        const accessToken: any = localStorage.getItem("accessToken")
        dispatch(getDeparture(accessToken, username))
    }, [username, dispatch])
    const deleteDepartureNotice = (id: number) => {
        const accessToken: any = localStorage.getItem("accessToken")
        dispatch(deleteDepartureThunks(+id, accessToken, username))
    }
    return (
        <div className={styles["space-nav"]}>
            <h1 className={styles.center}>Dashboard</h1>


            <FormDeparture />
            {/* <Map /> */}
            <h2 className={styles.center}>Mis avisos de salida</h2>
            <ul className={styles.container}>
                {
                    departures ? departures.map((e: any, i: number) => (
                        <li key={i} className={styles["list-departure"]}>
                            <div>
                                <ul>
                                    <li>ida: {e["data_return"].slice(0, 10)}</li>
                                    <li>regreso: {e["date_departure"].slice(0, 10)}</li>
                                    <li>n° participantes: {e["mount_participants"]}</li>
                                    <li>Detalles: {e.observations}</li>
                                    <li>Coordenadas:
                                        <ul>
                                            <li>
                                                Latitud: {e.lat}
                                            </li>
                                            <li>
                                                Longitud: {e.long}
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div><Button color="dark" action={() => deleteDepartureNotice(e.id)} >Delete</Button></div>
                        </li>
                    )) : <div>asd</div>
                }
            </ul>
        </div>
    )
}

export default Dashboard
