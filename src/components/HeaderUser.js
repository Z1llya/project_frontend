import {authServices} from "../services/auth-services";
import {useNavigate} from "react-router-dom";

export default function HeaderUser(){

    const navigate = useNavigate();

    const userData =JSON.parse(authServices.getUserData());

    const{name,surname} = userData;

    function submit() {
        navigate('/admin/users');
    }

    return(
        <div>
            <div className="userHeader">
            <button onClick={submit}>{name}</button>
                <h3>{name}</h3>
            </div>
        </div>
    );
}