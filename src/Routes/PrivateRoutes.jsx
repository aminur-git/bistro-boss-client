import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({children}) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation();


    if(loading){
        return (
      <div className="h-screen flex justify-center items-center">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
    }

    if(user){
        return children;
    }

    else return <Navigate to={'/login'} state={{from: location}} replace></Navigate>
};

export default PrivateRoutes;