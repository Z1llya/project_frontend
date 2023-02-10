import {Outlet} from "react-router-dom"
import Header from "../components/Header";
import {useSelector} from "react-redux";

export default function MainLayout(){

    return(
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
}