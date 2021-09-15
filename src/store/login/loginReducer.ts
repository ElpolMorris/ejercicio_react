import {LOGIN_INIT,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,EXIT_LOGIN} from "./constants"

interface InitialState {
    isLoading: boolean;
    success: boolean;
    failure: boolean;
    data: any
}

const initialState: InitialState = {
        isLoading: false,
        success: false,
        failure: false,
        data: {},
};

interface Actions {
    type: string;
    payload: any;
}



const loginReducer = (state: InitialState = initialState, actions: Actions) => {
    switch (actions.type) {
        case LOGIN_INIT:            
            return {
                ...state,
                isLoading: true
            };
        case LOGIN_SUCCESS:
            
            return {
                ...state,
                success: true,
                isLoading: false,
                data: actions.payload
            };
        case LOGIN_FAILURE:
            
            return {
                ...state,
                success: false,
                isLoading: false,
                failure: true,
                data: actions.payload
            };
        case EXIT_LOGIN:
            return {
                ...state,
                data: {},
                success: false
            }
        default:
            return state;
    }
}

export default loginReducer