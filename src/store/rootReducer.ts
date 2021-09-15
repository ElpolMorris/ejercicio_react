import { combineReducers } from "redux";
import loginReducer from "./login/loginReducer"
import usersReducer from "./admin-users/usersReducer";


const rootReducers = combineReducers({
    login: loginReducer,
    admin: usersReducer
})

export default rootReducers