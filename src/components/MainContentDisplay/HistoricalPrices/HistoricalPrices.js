import React,{useState,useEffect} from "react";
import "./HistoricalPrices.css" 
import axios from "axios"
import Spinner from "../../Spinner/Spinner"

const HistoricalPrices =()=>{
    
    const [year,setYear]=useState("2020")
    const [issno]=useState("KE1000001402")
    const [month,setMonth]=useState("8")
    const [message,setMessage]=useState([])
    const [isLoading,setIsLoading] =useState(false)
            
    useEffect(()=>{

        const getData=  ()=>{
         axios.post("https://www.deveintapps.com/nseticker/api/v1/historical-prices",{ isinno :issno, year: year, month: month})
           .then(res=>{
               
            const tracker=  JSON.stringify(res.data.message,undefined,4)
            const trackerParsed =  JSON.parse(tracker,undefined,4)
            setIsLoading(true)
            setMessage([...trackerParsed])
           })
        }
        getData()
        //clear data 
        return()=>{
            getData()
        }
    },[month,year])
    
   const  setMonthHandler=(mth)=>{
        setMonth(mth)
    }
    const  setYearHandler=(yrs)=>{
        setYear(yrs)
    }

    const tableData=message.map(data=>{
        let color;
        if(data.change < 0 ){
            color="neg"
        }else if(data.change==="-"){
            color= "yellow"
        } else{
            color="pos"
        }

        function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
        return(
            <tr key={data.date}>
                <td className="hist-table-data ">{data.date}</td>
                <td className="hist-table-data r">{data.high}</td>
                <td className="hist-table-data r">{data.low}</td>
                <td className="hist-table-data r"><span className={color}>{data.close}</span></td>
                <td className="hist-table-data r">{numberWithCommas(data.volume)}</td>
                <td className="hist-table-data r">{numberWithCommas(data.turnover)}</td>
            </tr>
        )
    })
 
     const Table= ()=>{
         return(
            <div className="histprices-table">
            <table>
                <thead >
                    <tr>
                        <th className="hist-header-date ">Date</th>
                        <th className="hist-header r">High</th>
                        <th className="hist-header r" >Low</th>
                        <th className="hist-header r">Close</th>
                        <th className="hist-header r">Volume</th>
                        <th className="hist-header r">Turnover</th>
                    </tr>
                </thead>
                <tbody>
                        {tableData}
                </tbody>
            </table>
        </div>
         )
     }
         
    return(
        <div className="HistoricalPrices ">
            <div className="his-content">
                <div className="his-date-picker">
                    <div>
                        <label id="tr-period" htmlFor="mitem">Trading Period:</label>
                    </div>
                    <div className="mselect">
                        <select id="mitem" defaultValue="November" onChange={(val)=>setMonthHandler(val.target.value)} >
                            <option  value="1" >January</option>
                            <option  value="2" >February</option>
                            <option  value="3" >March</option>
                            <option  value="4" >April</option>
                            <option  value="5" >May</option>
                            <option  value="6" >June</option>
                            <option  value="7" >July</option>
                            <option  value="8" >August</option>
                            <option  value="9" >September</option>
                            <option  value="10" >October</option>
                            <option  value="11" >November</option>
                            <option  value="12" >December</option>
                        </select>
                    </div>
                    <div  className="mselect">
                        <select id="mitem" defaultValue="2020" onChange={(yrs)=>setYearHandler(yrs.target.value)}>
                            <option  value="2022" >2022</option>
                            <option  value="2021" >2021</option>
                            <option  value="2020" >2020</option>
                            <option  value="2019">2019</option>
                            <option  value="2018">2018</option>
                            <option  value="2017">2017</option>
                            <option  value="2016">2016</option>
                            <option  value="2015">2015</option>
                            <option  value="2014">2014</option>
                            <option  value="2013">2013</option>
                            <option  value="2012">2012</option>
                            <option  value="2011">2011</option>
                            <option  value="2010">2010</option>
                        </select>
                    </div>
                </div>
            </div>
            {
                isLoading ?  <Table /> : <Spinner />
            }
        </div>
    )
 
}
   
export default React.memo(HistoricalPrices);

 