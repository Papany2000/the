import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "./contextAuth";



const RequireAuth = (props) => {
    const location = useLocation();
    const navigate = useNavigate()
    const fromPage = location.state?.from?.pathname && '/'
    const value = React.useContext(UserContext);
    const success = () => navigate(fromPage, { replace: true })
    if (value.auth === true) {
        success()
        return props.children;
        
    }
    return <Navigate to="*" state={{ from: location }} />;
};

export default RequireAuth;