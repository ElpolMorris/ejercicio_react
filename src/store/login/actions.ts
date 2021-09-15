import {LOGIN_INIT,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,EXIT_LOGIN} from "./constants"


//modificar tipos en acciones
export const loginInit = () => {
    return ({
        type: LOGIN_INIT
    })
}

export const loginSuccess = (data: any) => {
    return ({
        type: LOGIN_SUCCESS,
        payload: data
    })
}

export const loginFailure = (error: any) => {
    return ({
        type: LOGIN_FAILURE,
        payload: error
    })
}

export const exitLogin = () => {
    return ({
        type: EXIT_LOGIN
    })
}