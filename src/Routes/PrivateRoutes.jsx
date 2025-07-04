import { Navigate, useLocation } from 'react-router';
import UseAuth from '../Hooks/UseAuth';

const PrivateRoutes = ({children}) => {

    const { user, loading } = UseAuth()
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