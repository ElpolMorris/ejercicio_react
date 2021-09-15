import  { useState } from 'react'
import styles from "./NavLink.module.css"
import { Link } from 'react-router-dom'
import MenuIcon from "../../images/lista.svg"
import useWindowDimensions from "../../hooks/use-window-dimensions/useWindowDimensions"
import { useHistory } from 'react-router'
import { useSelectors } from '../../store/useSelectors'
import { useDispatch } from 'react-redux'
import { exitLogin } from '../../store/login/actions'

interface Props {
    
}

const NavLink = (props: Props) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const login = useSelectors(state => state.login.success)
    const {width} = useWindowDimensions()
    const [displayMenu, setDisplayMenu] = useState(false);

    const handleDisplayMenu = () => {
		setDisplayMenu(!displayMenu);
	};
    const closeSession = () => {
        localStorage.clear()
        dispatch(exitLogin())
        history.replace("/")
    }
    return (
        <nav className={styles.nav}>
            <div>
                {
                    login ? <Link to="/dashboard">Avisos de Salida</Link> : <Link to="/">Avisos de Salida</Link>
                }
                
                <img className={styles.icon} onClick={handleDisplayMenu} src={MenuIcon} width="32" height="32" alt="menu"/>
            </div>
            
            <div className={`${!displayMenu && width < 568 ? styles.none : ""}`}>
                {
                    login ? <><p>Bienvenido</p><p onClick={closeSession} className={styles.pointer}>Cerrar Sesión</p></> : <>
                    
                    <Link to="/login">Ingresar</Link>
                    <Link to="/register">Registrese</Link>
                    </>
                }
            </div>
        </nav>
    )
}

export default NavLink
