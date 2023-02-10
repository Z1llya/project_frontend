import {useNavigate} from "react-router-dom"


export default function Header(){

    const navigate = useNavigate();
    return(
        <div>
            <div><button onClick={()=>navigate('login')}>Login</button></div>
        </div>
    );
}