import {useForm} from "react-hook-form";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {paidActions} from "../redux/paid.slice";
import {useLocation, useNavigate} from "react-router-dom";

export default function EditPage(){
    const {register,setValue,handleSubmit} = useForm();

    const {userForUpdate} = useSelector(state => state.paid);

    const dispatch = useDispatch();

    const location = useLocation();

    const navigate = useNavigate();

    const {state} = location;

    useEffect(()=>{
        if(userForUpdate){
            setValue('name',userForUpdate.name)
            setValue('email',userForUpdate.email)
            setValue('surname',userForUpdate.surname)
            setValue('course',userForUpdate.course)
            setValue('phone',userForUpdate.phone)
            setValue('status',userForUpdate.status)
        }
    },[setValue,userForUpdate]);

    const submit = async (data)=> {
        await  dispatch(paidActions.updateById({id:state.id,user:data}))
    }

    return(
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder="name" {...register("name")}/>
                <input type="text" placeholder="email" {...register("email")}/>
                <input type="text" placeholder="surname" {...register("surname")}/>
                <select className="inp" {...register("course")}>
                    <option value=""> </option>
                    <option value="FS">FS</option>
                    <option value="QACX">QACX</option>
                    <option value="JCX">JCX</option>
                    <option value="FE">FE</option>
                    <option value="PCX">PCX</option>
                    <option value="JSCX">JSCX</option>
                </select>
                <input type="text" placeholder="phone" {...register("phone")}/>
                <input type="text" placeholder="status" {...register("status")}/>
                <button>Update</button>
                <button onClick={()=>{
                    navigate('/paid')
                }}>Back to table</button>
            </form>
        </div>
    );
}