import React, { useContext } from 'react'
import { Route } from 'react-router-dom'
//import ContextLogin from '../../contexts/ContextLogin'

interface PrivateRouteProps {
    component: React.ComponentType<any>;
    path: string;
    exact?: any;
}

const PrivateRoute = ({ component: Component, ...rest }: PrivateRouteProps) => {
    // const contextLogin = useContext(ContextLogin)
    // return contextLogin.isLogin ? (
    //     <Route
    //         {...rest}
    //         render={routeProps => (
    //             <Component {...routeProps} />
    //         )}
    //     />
    // ) : (<div className="alert alert-danger mt-4">Private View, please login</div>)
    return (<></>)
}

export default PrivateRoute