import React,{useState} from "react";
import "./PortfolioTable.css" 

const PortfolioTable=({date,priceRow,invest,valid,shares,gain,percent,graph})=>{
   
    const tableData= graph.map(data=>{
    return(
      <tr key={data.date}>
        <td id="date">date</td>
        <td id="addPrice">{graph.price}</td>
        <td id="addShares">{shares}</td>
        <td id="addInvest">{shares * graph.price}</td>
        <td id="addValid">{graph.gain + (shares * graph.price)}</td>
        <td  id="addGain" style={{color:"red"}}>{graph.gain} KES</td>
        <td  id="addPercent" style={{color:"red"}}>{percent}</td>
        <td  id="delete" style={{color:"red"}}>delete</td>
   </tr>
    )
})
 
    return(
        <div >
            <table className="portfolioTable">
                <thead className="table-head">
                    <tr className="row-background">
                        <th  className="headTable">Date</th>
                        <th  className="headTable">Price</th>
                        <th  className="headTable">Shares</th>
                        <th  className="headTable">Investment</th>
                        <th  className="headTable cc">CurrentValuation</th>
                        <th  className="headTable">Gross Gain/Loss</th>
                        <th  className="headTable">Gain/Loss %</th>
                        <th  className="headTable">Action</th>
                    </tr>
                </thead>
                <tbody id="ddisplay">
                <tr>
                       <td id="date">date</td>
                        <td id="addPrice">{priceRow}</td>
                        <td id="addShares">{shares}</td>
                        <td id="addInvest">{invest}</td>
                        <td id="addValid">{valid}</td>
                        <td  id="addGain" style={{color:"red"}}>{gain} </td>
                        <td  id="addPercent" style={{color:"red"}}>{percent}</td>
                        <td  id="delete" style={{color:"red"}}>delete</td>
                    </tr>
                    {tableData}
                    <tr>
                        <td colSpan="2" style={{textAlign: "center"}}>Totals : </td>
                        <td id="addShares">{shares}</td>
                        <td id="addInvest">{invest}</td>
                        <td id="addValid">{valid}</td>
                        <td  id="addGain" style={{color:"red"}}>{gain} KES</td>
                        <td  id="addPercent" style={{color:"red"}}>{percent}</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default PortfolioTable;