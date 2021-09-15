import {
	GET_USERS_INIT,
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE,
    USER_DELETE_INIT,
USER_DELETE_SUCCESS,
USER_DELETE_FAILURE
} from "./constants";

interface InitialState {
	isLoading: boolean;
	success: boolean;
	failure: boolean;
	data: object[];
}

const initialState: InitialState = {
	isLoading: false,
	success: false,
	failure: false,
	data: [],
};

interface Actions {
	type: string;
	payload: any;
}

const usersReducer = (state: InitialState = initialState, actions: Actions) => {

    switch (actions.type) {
        case GET_USERS_INIT:            
            return {
                ...state,
                isLoading: true
            };
        case GET_USERS_SUCCESS:
            
            return {
                ...state,
                success: true,
                isLoading: false,
                data: actions.payload
            };
        case GET_USERS_FAILURE:            
            return {
                ...state,
                success: false,
                isLoading: false,
                failure: true,
                data: actions.payload
            };        
        case USER_DELETE_INIT:            
            return {
                ...state,
                isLoading: true
            };
        case USER_DELETE_SUCCESS:
            
            return {
                ...state,
                success: true,
                isLoading: false,
                data: actions.payload
            };
        case USER_DELETE_FAILURE:            
            return {
                ...state,
                success: false,
                isLoading: false,
                failure: true,
                data: actions.payload
            };        
        default:
            return state;
    }
};

export default usersReducer
