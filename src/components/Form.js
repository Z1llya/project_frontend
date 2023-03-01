
import { useState} from "react";

export default function Form({searchParams,setSearchParams}){

    const handleChange = (e)=>{
        if(e.target.value){
            searchParams.set(e.target.name,e.target.value);
            setSearchParams(searchParams)
        }else{
            searchParams.delete(e.target.name);
            setSearchParams(searchParams)
        }
    }

    return(
        <div>
            <form >
                <input className="inp" type="type" name="name"  placeholder={'Name'} onChange={handleChange}/>
                <input className="inp" type="text" placeholder={'Email'} name="email" onChange={handleChange}/>
                <input className="inp" type="text" placeholder={'Age'} name="age" onChange={handleChange}/>
                <select className="inp" name="course" onClick={handleChange}>
                    <option value=""> </option>
                    <option value="FS">FS</option>
                    <option value="QACX">QACX</option>
                    <option value="JCX">JCX</option>
                    <option value="FE">FE</option>
                    <option value="PCX">PCX</option>
                    <option value="JSCX">JSCX</option>
                    <option value="" selected="selected" hidden="hidden">Course</option>
                </select>

                <select className="inp" name="status" onClick={handleChange}>
                    <option value=""> </option>
                    <option value="Согласен">Согласен</option>
                    <option value="Не согласен">Не согласен</option>
                    <option value="Дубляж">Дубляж</option>
                    <option value="В работе">В работе</option>
                    <option value="Новый">Новый</option>
                    <option value="" selected="selected" hidden="hidden">Status</option>
                </select>

                <select className="inp" name="course_format" onClick={handleChange}>
                    <option value=""> </option>
                    <option value="online">online</option>
                    <option value="static">static</option>
                    <option value="" selected="selected" hidden="hidden">Course Format</option>
                </select>

                <select className="inp" name="course_type" onClick={handleChange}>
                    <option value=""> </option>
                    <option value="incubator">incubator</option>
                    <option value="minimal">minimal</option>
                    <option value="premium">premium</option>
                    <option value="pro">pro</option>
                    <option value="vip">vip</option>
                    <option value="" selected="selected" hidden="hidden">Course Type</option>
                </select>
            </form>

        </div>
    );
}