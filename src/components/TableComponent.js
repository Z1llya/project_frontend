import TableData from "./TableData";
import React,{useState} from "react";
import Comments from "./Comments";

export default function TableComponent({data,columns}){

    const [isSubComponentVisible, setIsSubComponentVisible] = useState(false);

    const toggleSubComponent = () => {
        setIsSubComponentVisible(!isSubComponentVisible);
    };

    return(
    <React.Fragment key={data.id}>
        <tr  onClick={toggleSubComponent}>
            {columns && columns.map(({ accessor }) =>
                <TableData data={data} accessor={accessor}/>
            )}
        </tr>
        {isSubComponentVisible && (<Comments data={data}/>
        )}
    </React.Fragment>
);
}

// return(
//     <React.Fragment key={data.id}>
//         <tr  onClick={toggleSubComponent}>
//             {columns && columns.map(({ accessor }) =>
//                 <TableData data={data} accessor={accessor}/>
//             )}
//         </tr>
//         {isSubComponentVisible && (<Comments data={data}/>
//         )}
//     </React.Fragment>
// );
// }