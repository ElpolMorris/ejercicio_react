import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import styles from "./Map.module.css"


const Map = () => {
    const CENTER: [number, number] = [-33.6, -71];
 
    const INITIALZOOM = 9
    return (
        <MapContainer className={styles["leaflet-canvas"]} center={CENTER} zoom={INITIALZOOM} scrollWheelZoom={true}>
            < TileLayer 
                    attribution= '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                    url='https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
                />                
        </MapContainer>
    )
}

export default Map
