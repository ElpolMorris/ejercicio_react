import  { useState } from 'react'
import styles from "./NavLink.module.css"
import { Link } from 'react-router-dom'
import MenuIcon from "../../images/lista.svg"
import useWindowDimensions from "../../hooks/use-window-dimensions/useWindowDimensions"


interface Props {
    
}

const NavLink = (props: Props) => {

    const {width} = useWindowDimensions()
    const [displayMenu, setDisplayMenu] = useState(false);

    const handleDisplayMenu = () => {
		setDisplayMenu(!displayMenu);
	};
    return (
        <nav className={styles.nav}>
            <div>
                <Link to="/">Avisos de Salida</Link>
                <img className={styles.icon} onClick={handleDisplayMenu} src={MenuIcon} width="32" height="32" alt="menu"/>
            </div>
            
            <div className={`${!displayMenu && width < 568 ? styles.none : ""}`}>
                <Link to="/login">Ingresar</Link>
                <Link to="/register">Registrese</Link>
            </div>
        </nav>
    )
}

export default NavLink
