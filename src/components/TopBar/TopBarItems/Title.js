import React from "react";

const Title=({name,code})=>{
    return(
        <div style={{color:"white"}}>
            <h2>{name}  {code}</h2>
        </div>
    )
}

export default Title;