import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {authActions} from "../../redux/auth.slice";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {authServices} from "../../services/auth-services";

export default function LoginForm(){

    const {register,handleSubmit} = useForm();

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const submit = async (data) => {
        const {error} = await  dispatch(authActions.login({user:data}));
        if(!error){
            navigate('/paid');
        }


    };

    return(
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'email'} {...register('email')}/>
            <input type="text" placeholder={'password'} {...register('password')}/>
            <button>Login</button>

        </form>
    );
}