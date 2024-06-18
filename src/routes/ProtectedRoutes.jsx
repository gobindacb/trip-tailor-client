import { Navigate, useLocation } from "react-router-dom";


import UseAuth from "../hooks/UseAuth";
import Login from "../pages/Login/Login";

const ProtectedRoutes = ({children}) => {

    const {user, loading} = UseAuth();
    const location = useLocation();

   if(loading){
        return  <div>
            <p>Loading</p>
            <Login></Login>
        </div>
           
    }

    if (!user){
        return <Navigate to='/login' state={location?.pathname || '/'}/>
    }
     
   
    return (
        <div>
            {children}
        </div>
    );
};

export default ProtectedRoutes;