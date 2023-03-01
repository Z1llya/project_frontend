export default function TableData({data,accessor}){

    const tData = data[accessor] ? data[accessor] : "——";
    return(
         <td key={accessor}>{tData}  </td>
    );
}