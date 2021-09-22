import { combineReducers } from "redux";
import loginReducer from "./login/loginReducer"
import usersReducer from "./admin-users/usersReducer";
import departureReducer from "./departure-notice/departureReducer";


const rootReducers = combineReducers({
    login: loginReducer,
    admin: usersReducer,
    departure: departureReducer,
})

export default rootReducers