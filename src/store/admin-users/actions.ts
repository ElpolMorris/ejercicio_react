import {GET_USERS_INIT,
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE,
    USER_DELETE_INIT,
    USER_DELETE_SUCCESS,
    USER_DELETE_FAILURE,
    USER_CREATE_INIT,
    USER_CREATE_SUCCESS,
    USER_CREATE_FAILURE} from "./constants"

    import store from "../store";
export const getUsersInit = () => {
    return ({
        type: GET_USERS_INIT
    })
}
export const getUsersFailure = (error: any) => {
    return ({
        type: GET_USERS_INIT,
        payload: error
    })
}

export const getUsersSuccess = (userData: object) => {
    return ({
        type: GET_USERS_SUCCESS,
        payload: userData
    })
}

export const usersDeleteFailure = (error: any) => {
    return ({
        type: USER_DELETE_FAILURE,
        payload: error
    })
}
export const usersDeleteInit = () => {
    return ({
        type: USER_DELETE_INIT
    })
}
export const usersDeleteSuccess = (id: number) => {

    const { admin: usuarios } = store.getState();
    const users = usuarios.data;
    console.log("actions",users, id)
    return ({
        type: USER_DELETE_SUCCESS,
        payload: users.filter((user: any) => user.id !== id)
    })
}