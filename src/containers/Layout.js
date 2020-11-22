import React,{useState,useEffect} from "react"
import Footer from "../components/Footer/Footer";
import ModelView from "../components/ModelView/ModelView";
import TopBar from "../components/TopBar/TopBar";
import {BrowserRouter as Router} from "react-router-dom"
import "./Layout.css"
import axios from "axios";
import { MemoryRouter } from 'react-router-dom'


const Layout =()=>{
     
    const [code,setCode]=useState('');
    const [name,setName]=useState('');
    const [price,setPrice]=useState(0);
    const [prev_price,setPrev_price]=useState(0);
    const [today_open,setToday_open]=useState(0);
    const [today_high,setToday_high]=useState(0);
    const [today_low,setToday_low]=useState(0);
    const [turnover,setTurnover]=useState(0);
    const [volume,setVolume]=useState(0);
    const [today_close,setToday_close]=useState(0);
    const [change,setChange]=useState(0);
    const [date,setDate]=useState('');
    const [time,setTime]=useState('');
    const [market_status,setMarket_status]=useState('');
    const [topbarIssno]=useState('KE1000001402');

   const  getData=()=>{
       axios.post("https://www.deveintapps.com/nseticker/api/v1/information-bar",{ isinno : topbarIssno })
       .then( response => {
       
           const topbarItems= JSON.stringify(response.data.message,undefined,4)
           const parsed =JSON.parse(topbarItems,undefined,4)

           setCode(parsed.snapshot.code)
           setDate(parsed.updated_at.date)
           setMarket_status(parsed.updated_at.market_status)
           setName( parsed.snapshot.name)
           setPrev_price(parsed.snapshot.prev_price)
           setVolume( parsed.snapshot.volume)
           setPrice(parsed.snapshot.price)
           setChange(parsed.snapshot.change)
           setTime(parsed.updated_at.time)
           setToday_close(parsed.snapshot.today_close)
           setToday_high(parsed.snapshot.today_high)
           setToday_low( parsed.snapshot.today_low)
           setToday_open(parsed.snapshot.today_open)
           setTurnover(parsed.snapshot.turnover)
       })
    }
    useEffect(()=>{
 
        getData()
        //cleanup
        return()=>{
            clearInterval(getData())
        }
    },[]) 

    return(
        <div  className="View">
            <header> 
                <TopBar   
                    code={code}
                    name={name}
                    price={price}                    
                    change={change}
                    date={date}
                    time={time}
                    market_status={market_status}
                    />
            </header>
            <main>
            <MemoryRouter>
                    <ModelView
                    change={change}
                    turnover={turnover}
                    volume={volume}
                    prev_price={prev_price}
                    today_open={today_open}
                    today_high={today_high}
                    today_low={today_low}
                    today_close={today_close}
                    />  
            </MemoryRouter>
            </main>
            <footer>
            <Footer /> 
            </footer>
        </div>
    )
  
}
export default Layout;
