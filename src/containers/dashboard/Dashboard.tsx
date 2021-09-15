import React, { useEffect } from 'react'
import FormDeparture from '../../components/form-departure/FormDeparture'
import Map from '../../components/map/Map'



const Dashboard = () => {

    // useEffect(() => {
        
    // }, [])

    return (
        <div>
            <h1>Dashboard</h1>
            <FormDeparture />
            <Map />
        </div>
    )
}

export default Dashboard
