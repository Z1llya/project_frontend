import TableData from "./TableData";
import TableComponent from "./TableComponent";


export default function TableBody({tableData,columns}){




    return(
        <tbody>
        {tableData && tableData.map((data) =>
          <TableComponent data={data} columns={columns}/>)}
        </tbody>

    );
}