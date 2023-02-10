
import { useState} from "react";

export default function Form({searchParams,setSearchParams}){

    const [inputs,setInputs] = useState('');

    const handleChange = (e) =>{
        setInputs(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
        if(inputs.name){
            searchParams.set("name",inputs.name);
            setSearchParams(searchParams);
        }
        if(inputs.email){
            searchParams.set("email",inputs.email);
            setSearchParams(searchParams);
        }
        if(inputs.age){
            searchParams.set("age",inputs.age);
            setSearchParams(searchParams);
        }
        if(inputs.course){
            searchParams.set("course",inputs.course);
            setSearchParams(searchParams);
        }
        if(inputs.status){
            searchParams.set("status",inputs.status);
            setSearchParams(searchParams);
        }
        if(inputs.course_format){
            searchParams.set(" course_format",inputs.course_format);
            setSearchParams(searchParams);
        }
        if(inputs.course_type){
            searchParams.set("course_type",inputs.course_type);
            setSearchParams(searchParams);
        }
        else {
            searchParams.delete("name")
            searchParams.delete("email")
            searchParams.delete("age")
            searchParams.delete("course")
            searchParams.delete("status")
            searchParams.delete("course_format")
            searchParams.delete("course_type")
        }

    }
    console.log(inputs);


    return(
        <div>
            <form onChange={handleChange}>
                <input className="inp" type="type"  placeholder={'Name'} value={inputs.name || ''}  name="name"/>
                <input className="inp" type="text" placeholder={'Email'} value={inputs.email || ''} name="email"/>
                <input className="inp" type="text" placeholder={'Age'} value={inputs.age || ''} name="age"/>
                <input className="inp" type="text" placeholder={'Course'} value={inputs.course || ''} name="course"/>
                <input className="inp" type="text" placeholder={'Status'} value={inputs.status || ''} name="status"/>
                <input className="inp" type="text" placeholder={'Course_Format'} value={inputs.course_format || ''} name="course_format"/>
                <input className="inp" type="text" placeholder={'Course_Type'} value={inputs.course_type || ''} name="course_type"/>
            </form>

        </div>
    );
}