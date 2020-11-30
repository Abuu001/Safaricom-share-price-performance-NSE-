import React,{useState,useEffect} from "react";
import Table1 from "./Table1/Table1" 
import Table2 from "./Table2/Table2";
import axios from "axios";
import Spinner from "../../Spinner/Spinner"

const Summary =(props)=>{
  
    const  [currency,setCurrency] =useState("");
    const  [market,setMarket] =useState("");
    const  [isin_code,setIsin_code] =useState("");
    const  [ticker_code,setTicker_code] =useState("");
    const  [industry,setIndustry] =useState("");
    const  [market_cap,setMarket_cap] =useState("");
    const  [issno] =useState('KE1000001402');
    const  [corporate_actions,setCorporate_actions] =useState([]);
    const [isLoading,setIsLoading] =useState(true)

    useEffect(()=>{

        const getData=  ()=>{
        
            axios.post("https://www.deveintapps.com/nseticker/api/v1/summary",{ isinno : issno})
            .then(res=>{
                const summry=   JSON.stringify(res.data.message,undefined,4)
                const summryParsed =  JSON.parse(summry,undefined,4)
    
                setIsLoading(false)
                setCurrency(summryParsed.currency)    
                setIndustry(summryParsed.industry)
                setIsin_code(summryParsed.isin_code)
                setMarket(summryParsed.market)
                setTicker_code(summryParsed.ticker_code)
                setMarket_cap(summryParsed.market_cap)
                setCorporate_actions([...summryParsed.corporate_actions])
            })
        }
    
        getData()
        return()=>{
            getData()
        }
    },[])

    return(
        <div style={{overflowX:"auto"}}>
            <div >
                <Table1
                    currency={currency}
                    market={market}
                    isin_code={isin_code}
                    ticker_code={ticker_code}
                    industry={industry}
                    market_cap={market_cap}
                    />
            </div>
            <div>
                {
                    isLoading === true ?   <Spinner />  :   <Table2  corporate_actions={corporate_actions}   /> 
                }
            </div>
        </div>
    )
    
}

export default React.memo(Summary);

 