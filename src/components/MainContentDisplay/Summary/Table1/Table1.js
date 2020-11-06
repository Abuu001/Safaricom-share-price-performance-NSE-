import React from "react";
import "./Table1.css" 

const Table1=({currency,market, isin_code, ticker_code,industry,market_cap})=>{
    return(
        <div >
            <table className="summaryTable">
                <thead>
                    <tr>
                        <th className="headTable">Currency</th>
                        <th className="headTable">Market</th>
                        <th className="headTable">ISIN Code</th>
                        <th className="headTable">Ticker Code</th>
                        <th className="headTable">Sector</th>
                        <th className="headTable">Market Cap</th>
                    </tr>
               </thead>
               <tbody>
                   <tr>
                       <td  id="currency" >{currency}</td>
                       <td  id="market" >{market}</td>
                       <td  id="isnno" >{isin_code}</td>
                       <td  id="tcode" >{ticker_code}</td>
                       <td  id="sector" >{industry}</td>
                       <td  id="mcap" >{market_cap}</td>
                   </tr>
               </tbody>
            </table>
        </div>
    )
}

export default Table1;