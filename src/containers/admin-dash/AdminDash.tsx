import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Button from '../../components/button/Button'
import { deleteUsers, getUsersThunk } from '../../store/admin-users/thunks'
import {useSelectors} from "../../store/useSelectors"
import styles from "./AdminDash.module.css"
const AdminDash = () => {
    const dispatch = useDispatch()
    const adminAllData = useSelectors((state) => state.admin.data)
    useEffect(() => {
        const accessToken: any = localStorage.getItem("accessToken")
        dispatch(getUsersThunk(accessToken))
        
    },[dispatch])
    const deleteUser = (id: number) => {
        const accessToken: any = localStorage.getItem("accessToken")
        dispatch(deleteUsers(id,accessToken))
        //dispatch(getUsersThunk(accessToken))
    }
    return adminAllData && (
        <div className={styles["space-nav"]}>
            <h1 className={styles.center}>Admin</h1>
            <h2 className={styles.center}>Lista de usuarios</h2>
            <ul className={styles["list-center"]}>

            {
                adminAllData.map((e: any, i: number) => {
                    if(e.username === "admin"){
                        return ""
                    }
                    return (
                        <li key={i}>{e.id} - {e.username} <Button action={()=>deleteUser(parseInt(e.id))} color="dark">Borrar</Button> </li>
                    )
                })
            }
            </ul>
        </div>
    ) 
}

export default AdminDash
