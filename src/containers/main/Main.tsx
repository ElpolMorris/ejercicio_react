import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/button/Button'
import styles from "./Main.module.css"
interface Props {
    title: string;
    subtitle?: string;
}

const Main = (props: Props) => {
    return (
        <div className={styles.landscape}>
            <div>
                <h1>{props.title}</h1>
                <h2>{props.subtitle}</h2>
                <Button color="dark">
                    <Link to="/login">Ingresar</Link>
                </Button>
                <p>No tienes una cuenta? <Link to="/register">Ingresa Aquí ⛰️</Link></p>
            </div>
        </div>
    )
}

export default Main
