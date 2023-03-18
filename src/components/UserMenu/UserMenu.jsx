import { useDispatch } from "react-redux";
import { useAuth } from "hooks/hooks";
import { logOut } from "redux/Auth/operations";

export const UserMenu = () => {

    const dispatch = useDispatch();
    const { user } = useAuth();
  

    return (
    <div>
        <p>Welcome,{user.name} </p>
        <button  onClick={() => dispatch(logOut())}>Log Out</button>
    </div>
    )
}
