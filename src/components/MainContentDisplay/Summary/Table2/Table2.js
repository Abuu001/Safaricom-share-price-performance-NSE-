import React from "react";
import "./Table2.css"

const Table2=(props)=>{

    const tableData= props.corporate_actions.map(data=>{
        return(
            <tr className="table-row-tb-2" key={data.date}>
                <td id="table2-data">{data.date}</td>
                <td id="table2-data">{data.announcement_type}</td>
                <td id="table2-data">{data.rate}</td>
          </tr>
        )
    })
    return(
        <div >
            <table>
                <thead>
                    <tr className="table-row-tb-2">
                        <th className="headTable2" >Announcement Date</th>
                        <th className="headTable2" >Announcement Type</th>
                        <th className="headTable2" >Rate/Ratio</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData}
                </tbody>
            </table>
        </div>
    )
}

export default Table2;