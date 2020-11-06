import React,{useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./IrinPuts.css";

const IrinPuts=()=>{

    const [startDate, setStartDate] = useState(new Date());
    return(
        <div className="IrinPuts-Components" >
            <div className="component-1">
                    <label htmlFor="date-picker">Date</label>
                    <DatePicker selected={startDate} onChange={date => setStartDate(date)}  id="date-picker" className="input-box"/>
                    <label htmlFor= "quantity-label">Quantity</label>
                    <input type="number" id="quantity-label" className="input-box"/>
            </div>
            <div className="component-2">
                    <label htmlFor= "price-label">Price</label>
                    <input type="text" id="price-label" className="input-box"/>
                    <button id="btn-1">Add</button>
                    <button id="btn-2">Cancel</button>
            </div>
        </div>
    )
}

export default IrinPuts;