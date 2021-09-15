import React from 'react'
import { Route } from 'react-router-dom'
import {useSelectors} from "../../store/useSelectors"

interface PrivateRouteProps {
    component: React.ComponentType<any>;
    path: string;
    exact?: any;
}



const PrivateRoute = ({ component: Component, ...rest }: PrivateRouteProps) => {
    const login = useSelectors((state) => state.login.success)
    //const contextLogin = useContext(ContextLogin)
    return login ? (
        <Route
            {...rest}
            render={routeProps => (
                <Component {...routeProps} />
            )}
        />
    ) : (<div>Vista restringida, Loguéese para ingresar</div>)
}

export default PrivateRoute