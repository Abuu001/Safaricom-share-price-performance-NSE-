import React from "react";
import "./TimeStatus.css";
 

const TimeStatus=({price,date,time,change,market_status})=>{
    let color;
    if(change<0){
        color="neg"
    }else if(change===0){
        color="yellow"
    } else{
        color="pos"
    }

    return(
        <div className="TimeStatus">
           <div>
                <div className="Time">{date}  {time}</div>
                <div className="Time">Market Status <span>{market_status}</span></div>
           </div>
           <div>
               <h4>{price} <sub className={color}>({change})</sub></h4>
           </div>
        </div>
    )
}

export default TimeStatus;