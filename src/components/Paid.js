import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {paidActions} from "../redux/paid.slice";
import Table from "./Table";

import "./css.css"
import {useSearchParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import Form from "./Form";




export default function Paid(){



    const [searchParams,setSearchParams] = useSearchParams({name:'',email:'',age:'',course:'',status:'',course_format:'',course_type:''});
    // ,order:'_id'

    const nameQuery = searchParams.get('name') || '';
    const emailQuery = searchParams.get('email') || '';
    const ageQuery = searchParams.get('age') || '';
    const courseQuery = searchParams.get('course') || '';
    const statusQuery = searchParams.get('status') || '';
    const course_formatQuery = searchParams.get('course_format') || '';
    const course_typeQuery = searchParams.get('course_type') || '';
    // const orderQuery = searchParams.get('order') || '';



    const {paid} = useSelector(state => state.paid);
    const {data} = paid;

    const [query,setQuery] = useSearchParams({page: '1'});


    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(paidActions.getAll({
            page:query.get('page'),
            name:searchParams.get('name'),
            email:searchParams.get('email'),
            age:searchParams.get('age'),
            course:searchParams.get('course'),
            status:searchParams.get('status'),
            course_format:searchParams.get('course_format'),
            course_type:searchParams.get('course_type'),
            // order:searchParams.get('order')
        }))

    },[query,nameQuery])

    const prevPage = () => {

        const page = +query.get('page')-1;

        setQuery({page:`${page}`})

    };

    const nextPage = () => {

        const page = +query.get('page')+1;
        setQuery({page:`${page}`})


    };

    const search = (data)=>{
        return data && data.filter(
            (obj)=>
                obj.name.toLowerCase().includes(nameQuery) &&
                obj.email.toLowerCase().includes(emailQuery) &&
                obj.age.toString().includes(ageQuery) &&
                obj.course.toLowerCase().includes(courseQuery) &&
                obj.course_type.toLowerCase().includes(course_typeQuery) &&
                obj.course_format.toLowerCase().includes(course_formatQuery)
        )
    }
    // console.log(nameQuery);



    return(
        <div className="table_container">
            <Form searchParams={searchParams} setSearchParams={setSearchParams}/>

            <Table data={search(data)} search={searchParams} setSearch={setSearchParams}/>

            <button className={'buttonPage'}  onClick={prevPage}>Prev</button>
            <button className={'buttonPage'} onClick={nextPage}>Next</button>
        </div>
    );
}