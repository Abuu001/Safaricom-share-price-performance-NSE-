import React from "react";
import "./PortfolioTable.css" 

const PortfolioTable=()=>{
    return(
        <div >
            <table>
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
                        <td colSpan="2" style={{textAlign: "center"}}>Totals : </td>
                        <td id="addShares">0</td>
                        <td id="addInvest">0.00</td>
                        <td id="addValid">0.00</td>
                        <td  id="addGain" style={{color:"red"}}>0.00 KES</td>
                        <td  id="addPercent" style={{color:"red"}}>NaN</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default PortfolioTable;