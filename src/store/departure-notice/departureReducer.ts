import {
	DELETE_DEPARTURE_INIT,
DELETE_DEPARTURE_SUCCESS,
DELETE_DEPARTURE_FAILURE,
CREATE_DEPARTURE_INIT,
CREATE_DEPARTURE_SUCCESS,
CREATE_DEPARTURE_FAILURE,
USER_GET_INIT,
USER_GET_SUCCESS,
USER_GET_FAILURE,
GET_DEPARTURE_INIT,
GET_DEPARTURE_SUCCESS,
GET_DEPARTURE_FAILURE
} from "./constants";

interface InitialState {
	isLoading: boolean;
	success: boolean;
	failure: boolean;
	data: object[];
    user:object;
    error: any;
}

const initialState: InitialState = {
	isLoading: false,
	success: false,
	failure: false,
	data: [],
    user: {},
    error: {}
};

interface Actions {
	type: string;
	payload: any;
}

const departureReducer = (state: InitialState = initialState, actions: Actions) => {
    switch (actions.type) {
        case CREATE_DEPARTURE_INIT:            
            return {
                ...state,
                isLoading: true
            };
        case CREATE_DEPARTURE_SUCCESS:
            
            return {
                ...state,
                success: true,
                isLoading: false,
                data: actions.payload
            };
            
        case CREATE_DEPARTURE_FAILURE:            
            return {
                ...state,
                success: false,
                isLoading: false,
                failure: true,
                data: [],
                error: actions.payload
            };        
             
        case USER_GET_INIT:            
            return {
                ...state,
                isLoading: true
            };
        case USER_GET_SUCCESS:
            
            return {
                ...state,
                success: true,
                isLoading: false,
                user: actions.payload
            };
        case USER_GET_FAILURE:            
            return {
                ...state,
                success: false,
                isLoading: false,
                failure: true,
                user: {},
                error: actions.payload
            };        
        case GET_DEPARTURE_INIT:            
            return {
                ...state,
                isLoading: true
            };
        case GET_DEPARTURE_SUCCESS:
            
            return {
                ...state,
                success: true,
                isLoading: false,
                data: actions.payload
            };
        case GET_DEPARTURE_FAILURE:            
            return {
                ...state,
                success: false,
                isLoading: false,
                failure: true,
                error: actions.payload
            };        
        case DELETE_DEPARTURE_INIT:            
            return {
                ...state,
                isLoading: true
            };
        case DELETE_DEPARTURE_SUCCESS:
            
            return {
                ...state,
                success: true,
                isLoading: false,
                data: actions.payload
            };
        case DELETE_DEPARTURE_FAILURE:            
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

export default departureReducer
