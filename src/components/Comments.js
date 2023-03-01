import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {paidActions} from "../redux/paid.slice";
import {useState} from "react";
import Modal from "./Modal";
import {useNavigate} from "react-router-dom";


export default function Comments({data,setShowResults}){

    const dispatch = useDispatch();
    const {register,handleSubmit,setValue} = useForm();

    const navigate = useNavigate();


    const {_id,email,comments} = data;


    const Submit =async (data)=> {
        await  dispatch(paidActions.updateById({id:_id,user:data}))
        console.log(data);
    }

    const [show,setShow] = useState(false);



    return(
        <tr className="commentsTR">
            <hr/>
            {comments && comments.map(coment=><td colSpan="3">{coment.comment}</td>)}
            <hr/>
            <td>
            <form onSubmit={handleSubmit(Submit)}>

                {/*<input type="text" placeholder={'comment'} {...register('comment')}/>*/}
                <input type="text" placeholder={'comment'} {...register('name')}/>
                <button>ok</button>
            </form>
                <button onClick={()=>{
                    dispatch(paidActions.setUserForUpdate(data))
                    navigate("/editUser",{state:{id:_id.toString()}})

                }}>Edit</button>
            </td>

        </tr>
    );
}

{/*<button onClick={()=>{*/}
{/*    setShow(true)*/}
{/*}} >Edit</button>*/}
{/*<br/>*/}
{/*<Modal show={show} data={data} onClose={()=>setShow(false)}/>*/}