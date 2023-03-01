import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {paidActions} from "../redux/paid.slice";
import User from "../components/User";
import {useForm} from "react-hook-form";

export default function AdminPage(){

    const {adminUsers} = useSelector(state => state.adminUsers);

    console.log(adminUsers);

    const {register,handleSubmit,getValues} = useForm();

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(paidActions.getAdminUsers())
    },[dispatch]);

    const submit = async (data)=>{
        await dispatch(paidActions.createUser({user:data}))
    }

    return(
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={"email"} {...register('email')}/>
                <input type="text" placeholder={"name"} {...register('name')}/>
                <input type="text" placeholder={"surname"} {...register('surname')}/>
                <button>create</button>
            </form>
            {adminUsers && adminUsers.map(user=> <User user={user}/>)}

        </div>
    );
}