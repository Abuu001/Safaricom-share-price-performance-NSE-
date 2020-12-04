import React,{useState,useEffect} from "react";
import axios from "axios"
import "./IrinPuts.css";
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import HoldingCalculatorGraph from "../HoldingCalculatorGraph/HoldingCalculatorGraph"


const IrinPuts=()=>{
    
    const [startDate, setStartDate] = useState("" || "yyyy-mm-dd");
    const [issno]=useState('KE1000001402')
    const [type,setType]=useState("Buy");
    const [quantity,setQuantity]=useState(0);
    const [price , setPrice]=useState(0);

    const [invest,setInvest]=useState(0);
    const [gain,setGain]=useState(0);
    const [percent,setPercent]=useState(0);
    const [datarow,setDatarow]=useState([]);

    useEffect(()=>{  

        const getData1= async ()=>{

            const res = await axios.post("https://www.deveintapps.com/nseticker/api/v1/holdings-calculator/check-price",{ isinno : issno ,date :startDate})
            const vTable=  await JSON.stringify(res.data.message.price,undefined,4);
            const vTableParsed =await JSON.parse(vTable,undefined,4);
            setPrice(vTableParsed);
        }
      const   getData2=()=>{
            axios.post("https://www.deveintapps.com/nseticker/api/v1/holdings-calculator",{ isinno : issno , price:price, type:type, quantity:quantity ,date :startDate})
            .then(res=>{
                const pTable=  res.data.message;
                // const dinvest=  Number.parseFloat(res.data.message.investment.trim().replace(/[^\d.-]/g, ''));
                // const dgain=  Number.parseFloat(res.data.message.gain.trim().replace(/[^\d.-]/g, ''));
                setInvest(Number.parseFloat(pTable.investment.trim().replace(/[^\d.-]/g, '')));
                setGain(Number.parseFloat(pTable.gain.trim().replace(/[^\d.-]/g, '')));
                setPercent(pTable.percent);
                setType(pTable.type);
            })
        }

        getData2();
        getData1();
        return()=>{
            getData1();
            getData2();
        }
    },[startDate,quantity])

    //to delete a data in  a table
    const tdDelete=(id)=>{
    let newData = datarow.filter((_,dataId)=>{
        return dataId !== id;
    })
    setDatarow(newData)
    }
    
    //to  add data in a table
    const addHandler=()=>{         
        if(quantity ===0 ||  startDate==="yyyy-mm-dd"){
            setDatarow(prevData=>[...prevData])
        }else{
            setDatarow(prevData=>[...prevData,{quantity :quantity, startDate : startDate, price :price ,percent : percent ,invest :invest ,gain:gain}])
            setQuantity(0)
        }
 
    }
    const tableData= datarow.map((data,id)=>{
        // if(data.gain<1){
            //     color="red";
            // }else{
                //     color="#39b54a";
                // }

        const currentVal= ((data.quantity * data.price) +  +data.gain );
        const rowGain =(data.gain);
        const rowInvest=(data.invest);

        let color;
        data.gain <1 ?    color="red" :  color="#39b54a";
        return(
            <tr key={id} >
                <td id="calcdatrow">{data.startDate}</td>
                <td id="calcdatrow">{Number.parseFloat(data.price)}</td>
                <td id="calcdatrow">{Number.parseFloat(data.quantity)}</td> 
                {/* <td id="calcdatrow">{data.price * +data.quantity}</td>   */}
                <td id="calcdatrow">{(rowInvest).toFixed(2)}</td>  
                <td id="calcdatrow">{(currentVal).toFixed(2)}</td>
                <td  id="calcdatrow" style={{ color: color}}>{(rowGain).toFixed(2)}</td>
                <td  id="calcdatrow" style={{color:"#39b54a"}}>{data.percent}</td>
                <td>
                    <DeleteForeverOutlinedIcon color="secondary" style={{cursor:"pointer"}}  onClick={()=>tdDelete(id)}/>
                </td>
            </tr>
        )       
    })

    const totalsQuantity =  datarow.reduce((prev,curr)=>{
        return Number.parseFloat(prev  +  +curr.quantity)
    },[])

    const totalsInvestment=  datarow.reduce((prev,curr)=>{
        const tInv= (prev  +  +curr.invest);
        return  Number.parseFloat((tInv * +1).toFixed(2)); 
    },[])
    
    const totalsGain=  datarow.reduce((prev,curr)=>{
        const tttGain =(prev  +  +curr.gain);
        return  Number.parseFloat((tttGain *+1).toFixed(2)) ; 
    },[])
    
    const totalsPercent=  datarow.reduce((prev,curr)=>{
        // const totpercent = (curr.gain / curr.invest)*100;
       //    const totpercent = ((prev  +  +curr.gain) /  (prev  +  +curr.invest)*100);
        // return  Number.parseFloat(prev  +  +curr.percent).toFixed(2);
        
        const tgain= (prev +  +curr.gain);
        const tinvest = (prev +  +curr.invest);
        return  Number.parseFloat((tgain / tinvest *+100).toFixed(2));
    },[])

    const totalsCurrentValuation=  datarow.reduce((prev,curr)=>{
       // (data.quantity * data.price) +  data.gain
       // (curr.quantity * curr.price) +  data.gain
      //  const totcurr=((prev + +curr.quantity *  +curr.price) +  +curr.gain);
    
        const t1=(prev + +curr.quantity);
        const t2 =(curr.price);
        const t3 =(curr.gain);
        const totcurr=((t1* t2 ) +  +t3);
       return  Number.parseFloat((totcurr * +1).toFixed(2)); 
    },[])
    
   const cancelHandler=()=>{
       setQuantity("");
       setStartDate("yyyy-mm-dd")
    }
 
    let gainColor;
    totalsGain<1 ?  gainColor="red" :  gainColor="#39b54a";

    let percentColor;
    totalsPercent<1 ?  percentColor="red" :  percentColor="#39b54a";

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    return(
        <div>
            <div className="HoldingGraph">
                <HoldingCalculatorGraph  startDate={startDate}  price={price} quantity={quantity}/>
            </div>
            <div className="IrinPuts-Components" >
                <div className="component-1">
                    <label htmlFor="start">Date</label>
                    <input type="date" id="start" name="trip-start" value={startDate} onChange={date => setStartDate(date.target.value) } ></input>     
                    <label htmlFor= "quantity-label">Quantity</label>
                    <input type="number" id="quantity-label" className="input-box" name="input" onChange={e => setQuantity(e.target.value)} value={quantity}/>
                </div>
                <div className="component-2">
                    <label htmlFor= "price-label">Price</label>
                    <input type="text" id="price-label" className="input-box" value={price} style={{cursor: "not-allowed"}} disabled={true}/>
                    <button id="btn-1"  onClick={addHandler}>Add</button>
                    <button id="btn-2"  onClick={cancelHandler}>Cancel</button> 
                </div>
                <div className="ovf">
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
                            {tableData}
                            <tr>
                                <td id="Totals"  colSpan="2" style={{textAlign: "center"}}>Totals : </td>
                                <td id="Totals" >{totalsQuantity}</td>
                                <td  id="Totals">{numberWithCommas(totalsInvestment)}</td>
                                <td  id="Totals">{numberWithCommas(totalsCurrentValuation)}</td>
                                <td style={{ color: gainColor}}  id="Totals">{`${totalsGain} KES`}</td>
                                <td  style={{ color: percentColor}} id="Totals">{totalsPercent}</td>
                                <td></td>
                                </tr>
                        </tbody>
                </table>
                </div>
            </div>
        </div>
    )
}
export default IrinPuts;