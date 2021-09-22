import {  useContext, useState } from 'react'
import { MapContainer, Marker, TileLayer, useMapEvents } from 'react-leaflet'
import styles from "./Map.module.css"
import { LatLngTuple } from 'leaflet';
import PointContext from '../../context/pointContext';


const GetCoords = ()=>{
    const [position, setPosition] = useState(null)
    const {settingCoords} = useContext(PointContext)

    useMapEvents({
        click:(e: any)=>{
            setPosition(e.latlng)
            settingCoords(e.latlng)
            
        },
        dblclick: (e:any)=>{
            setPosition(null)
            settingCoords({lat:0,long:0})
        }
    })
    return position ?(
        <Marker  position={position}>
            
        </Marker>
    ) : null
}



const Map = () => {
    const CENTER: LatLngTuple = [-33.6, -71];
 
    const INITIALZOOM = 9


    return (
        <MapContainer className={styles["leaflet-canvas"]} center={CENTER} zoom={INITIALZOOM} scrollWheelZoom={true}>
            < TileLayer 
                    attribution= 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                    url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
                />   
                <GetCoords />                
        </MapContainer>
    )
}

export default Map
