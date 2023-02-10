export default function TableBody({tableData,columns}){
    return(
        <tbody>
        {tableData && tableData.map((data) => {
            return (
                <tr key={data.id}>
                    {columns && columns.map(({ accessor }) => {
                        const tData = data[accessor] ? data[accessor] : "——";
                        return <td key={accessor}>{tData}</td>;
                    })}
                </tr>
            );
        })}
        </tbody>
    );
}