import React from "react";
import IrinPuts from "./IrinPuts/IrinPuts";
import "./HoldingsCalculator.css";
import PortfolioTable from "./PortfolioTable/PortfolioTable"

const HoldingsCalculator=()=>{
    return(
        <div >
            <div>
                <h3 className="portfolio-s">Safaricom Portfolio</h3>
                <p  className="portfolio-v">Portfolio Validation</p>
            </div>
            <div>
                <IrinPuts /> 
            </div>
            <div className="ovf">
                <PortfolioTable />
            </div>
            <p style={{fontWeight:"bold",color:"black"}}>Note : Total  %Gain/Loss = (Total Gain/Loss)/Total Investment)*100</p>
        </div>
    )
}

export default HoldingsCalculator;