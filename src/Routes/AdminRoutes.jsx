import React from 'react';
import UseAuth from '../Hooks/UseAuth';
import { Navigate, useLocation } from 'react-router';
import useAdmin from '../Hooks/useAdmin';

const AdminRoutes = ({children}) => {
    
    const { user, loading } = UseAuth()
   const [isAdmin, adminLoading] = useAdmin()
    const location = useLocation();


    if(loading && adminLoading){
        return (
      <div className="h-screen flex justify-center items-center">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
    }

    if(user && isAdmin){
        return children;
    }

    else return <Navigate to={'/login'} state={{from: location}} replace></Navigate>
};




export default AdminRoutes;