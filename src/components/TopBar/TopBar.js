import React from "react";
import "./TopBar.css";
import TimeStatus from "./TopBarItems/TimeStatus/TimeStatus";
import Title from "./TopBarItems/Title"

const TopBar=(props)=>{
    return(
        <div className="TopBar">
            <Title  
                code={props.code}
                name={props.name}
            />
            <TimeStatus
                change={props.change}
                date={props.date}
                time={props.time}
                price={props.price}
                market_status={props.market_status}
            />
        </div>
    )
}

export default React.memo(TopBar);