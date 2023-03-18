import { Navigate } from "react-router-dom";
import { useAuth } from "hooks/hooks";

export const RestrictedRoute = ({component:Component, redirectTo = '/'})=>{

    const {isLoggedIn} = useAuth();
    console.log(isLoggedIn)
    return isLoggedIn?<Navigate to={redirectTo}/>:Component
}