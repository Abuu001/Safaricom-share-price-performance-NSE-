import React from "react";
import "./StatusBar.css";

const StatusBar=({turnover,volume,prev_price,today_close,today_open,today_low,today_high,change})=>{

    let color;
    if(change<0){
        color="neg"
    }else if(change===0){
        color="yello"
    }else{
        color="pos"
    }

    return(
        <div className="StatusBar">
            <div className="col">
                <div><h4>Previous Price</h4></div>
                <div><p className={color}>{prev_price}</p></div>
            </div>
            <div className="col">
                <div><h4>Daily High</h4></div>
                 <div><p className={color}>{today_high}</p></div>
            </div>
            <div className="col">
                <div><h4>Daily low </h4></div>
                <div><p className={color}>{today_low}</p></div>
            </div>
            <div className="col">
                <div><h4>Close</h4></div>
               <div><p className={color}>{today_close}</p></div>
            </div>
            <div className="col">
                <div><h4>Open</h4></div>
                <div><p className={color}>{today_open}</p></div>
            </div>
            <div className="col">
                <div><h4>Volume</h4></div>
               <div><p className={color}>{volume}</p></div>
            </div>
            <div className="col coln">
                <div><h4>TurnOver</h4></div>
                <div><p className={color}>{turnover}</p></div>
            </div>
        </div>
    )
}

export default React.memo(StatusBar);