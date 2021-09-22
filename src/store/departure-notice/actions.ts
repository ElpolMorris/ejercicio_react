import store from "../store"
import {
    GET_DEPARTURE_INIT,
    GET_DEPARTURE_SUCCESS,
    GET_DEPARTURE_FAILURE,
    DELETE_DEPARTURE_INIT,
    DELETE_DEPARTURE_SUCCESS,
    DELETE_DEPARTURE_FAILURE,
    CREATE_DEPARTURE_INIT,
    CREATE_DEPARTURE_SUCCESS,
    CREATE_DEPARTURE_FAILURE,
    USER_GET_INIT,
    USER_GET_SUCCESS,
    USER_GET_FAILURE,} from "./constants"

    export const createDepartureInit = () => ({
        type: CREATE_DEPARTURE_INIT,
    })
    export const createDepartureSuccess = (newDeparture: any)=>{
        const { departure } = store.getState();
        const {data}: any = departure
        return {
            type: CREATE_DEPARTURE_SUCCESS,
            payload: {
                ...data,
                departure: newDeparture
            }
        }

    }
    export const createDepartureFailure = (error: any) => ({
        type: CREATE_DEPARTURE_FAILURE,
        payload: error
    })
    export const getDepartureInit = () => ({
        type: GET_DEPARTURE_INIT,
    })
    export const getDepartureSuccess = (departure: object)=>({
        type: GET_DEPARTURE_SUCCESS,
        payload: departure
    })
    export const getDepartureFailure = (error: any) => ({
        type: GET_DEPARTURE_FAILURE,
        payload: error
    })
    export const userGetInit = () => ({
        type: USER_GET_INIT,
    })
    export const userGetSuccess = (user: object)=>({
        type: USER_GET_SUCCESS,
        payload: user
    })
    export const userGetFailure = (error: any) => ({
        type: USER_GET_FAILURE,
        payload: error
    })
    export const deleteDepartureInit = () => ({
        type: DELETE_DEPARTURE_INIT,
    })
    export const deleteDepartureSuccess = (id: number)=>{
        const { departure } = store.getState();
        const {data} = departure
    return ({
        type: DELETE_DEPARTURE_SUCCESS,
        payload: {
            ...data,
            departure: data.departure.filter((dep: any) => dep.id !== id)
        }
        
        
    })
    }
    export const deleteDepartureFailure = (error: any) => ({
        type: DELETE_DEPARTURE_FAILURE,
        payload: error
    })

