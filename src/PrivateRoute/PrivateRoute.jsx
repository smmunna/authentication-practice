import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const{user,loading} = useContext(AuthContext);
    let location = useLocation();

    if(loading){
        return <div>Loading...</div>
    }

    if(user){
        return children;
    }

    return <Navigate to="/register" state={{ from: location }} replace ></Navigate>
    
}

export default PrivateRoute;
