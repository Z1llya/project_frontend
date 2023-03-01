import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {paidActions} from "../redux/paid.slice";


export default function Modal( props ) {

    // const {userForUpdate} = useSelector(state => state.paid)

    const {register,handleSubmit,setValue} = useForm();


    console.log(props.data._id);

    const dispatch = useDispatch();

    // useEffect(()=>{
    //     if (userForUpdate) {
    //         setValue('name', userForUpdate.name)
    //         setValue('surname', userForUpdate.surname)
    //         setValue('email', userForUpdate.email)
    //     }
    // },[userForUpdate,setValue])

    const submit = async (data) =>{
        console.log(data);
        // dispatch(paidActions.updateById({id: props.data._id, user:e}));
       await dispatch(paidActions.updateById({id: props.data._id,user: data}));

    }
    
    if(!props.show){
        return null
    }
    
    return(
        <div className="modal" onClick={props.onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
                <h4 className="modal-title">Modal title</h4>
            </div>
            <div className="modal-body">
                <form onSubmit={handleSubmit(submit)}>
                    <input type="text" placeholder={'name'} />
                    <button >Update</button>
                </form>
            </div>
            <div className="modal-footer">
                <button className="button" onClick={props.onClose}>Close</button>
            </div>
        </div>
    </div>)

}
