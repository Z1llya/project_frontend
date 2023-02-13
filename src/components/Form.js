
import { useState} from "react";

export default function Form({searchParams,setSearchParams}){

    const [inputs,setInputs] = useState('');

    // const handleChange = (e) =>{
    //     setInputs(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
    //     if(inputs.name){
    //         searchParams.set("name",inputs.name);
    //         setSearchParams(searchParams);
    //     }
    //     if(inputs.email){
    //         searchParams.set("email",inputs.email);
    //         setSearchParams(searchParams);
    //     }
    //     if(inputs.age){
    //         searchParams.set("age",inputs.age);
    //         setSearchParams(searchParams);
    //     }
    //     if(inputs.course){
    //         searchParams.set("course",inputs.course);
    //         setSearchParams(searchParams);
    //     }
    //     if(inputs.status){
    //         searchParams.set("status",inputs.status);
    //         setSearchParams(searchParams);
    //     }
    //     if(inputs.course_format){
    //         searchParams.set(" course_format",inputs.course_format);
    //         setSearchParams(searchParams);
    //     }
    //     if(inputs.course_type){
    //         searchParams.set("course_type",inputs.course_type);
    //         setSearchParams(searchParams);
    //     }
    //     else {
    //         searchParams.delete("name")
    //         searchParams.delete("email")
    //         searchParams.delete("age")
    //         searchParams.delete("course")
    //         searchParams.delete("status")
    //         searchParams.delete("course_format")
    //         searchParams.delete("course_type")
    //     }
    //
    // }
    // console.log(inputs);

    // onChange={handleChange}
    return(
        <div>
            <form >
                <input className="inp" type="type"  placeholder={'Name'} onChange={(e)=>{
                    searchParams.set("name",e.target.value)
                    setSearchParams(searchParams)
                }}/>
                <input className="inp" type="text" placeholder={'Email'} name="email" onChange={(e)=>{
                    searchParams.set("email",e.target.value)
                    setSearchParams(searchParams)}}/>
                <input className="inp" type="text" placeholder={'Age'} name="age" onChange={(e)=>{
                    searchParams.set("age",e.target.value)
                    setSearchParams(searchParams)
                }}/>
                <input className="inp" type="text" placeholder={'Course'} name="course" onChange={(e)=>{
                    searchParams.set("course",e.target.value)
                    setSearchParams(searchParams)
                }}/>
                <select >
                    <option value={1}>1</option>
                </select>
                <input className="inp" type="text" placeholder={'Status'} name="status" onChange={(e)=>{
                    searchParams.set("status",e.target.value)
                    setSearchParams(searchParams)
                }}/>
                <input className="inp" type="text" placeholder={'Course_Format'} name="course_format" onChange={(e)=>{
                    searchParams.set("course_format",e.target.value)
                    setSearchParams(searchParams)
                }}/>
                <input className="inp" type="text" placeholder={'Course_Type'} name="course_type" onChange={(e)=>{
                    searchParams.set("course_type",e.target.value)
                    setSearchParams(searchParams)
                }}/>
            </form>

        </div>
    );
}