import {useState} from "react";

export default function TableHead({ columns,setSearch,search}){

    const [sort,setSort] = useState('-');

    function s(e) {
        const element =e && e.target.getAttribute('data-item');
        if(element){
            setSearch({order:`${sort}${element}`})
            if(sort==='-'){
                setSort('+');
            }else{
                setSort('-');
            }
        }else{
            search.delete('order');
        }


    }

    return(
            <thead >
            {columns && columns.map(({ label, accessor }) =>
                <th key={accessor}  data-item={accessor} onClick={s}>{label}</th>
            )}
            </thead>
    );
}