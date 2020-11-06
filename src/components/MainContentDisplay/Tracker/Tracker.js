import React ,{useState,useEffect}from "react";
import "./Tracker.css"
import axios from "axios"
 
const Tracker =()=>{
 //ytd
  const    [YTD_all_share_index,setYTD_All_share_index]=useState('')
  const    [YTD_twenty_share_index,setYTD_Twenty_share_index]=useState('')
  const    [YTD_market_cap,setYTD_Market_cap]=useState('')
  const    [YTD_twenty_five_share_index,setYTD_Twenty_five_share_index]=useState('')
  const    [YTD_price,setYTD_price]=useState('')
  const    [YTD_instrument_market_cap,setYTD_instrument_market_cap]=useState('')

  //2weeks
  const    [_2_Weeks_all_share_index,set2Weeks_All_share_index]=useState('')
  const    [_2_Weeks_twenty_share_index,set2Weeks_Twenty_share_index]=useState('')
  const    [_2_Weeks_market_cap,set2Weeks_Market_cap]=useState('')
  const    [_2_Weeks_twenty_five_share_index,set2Weeks_Twenty_five_share_index]=useState('')
  const    [_2_Weeks_price,set2Weeks_price]=useState('')
  const    [_2_instrument_market_cap,set2Weeks_instrument_market_cap]=useState('')

   //1 month
   const    [_1_month_all_share_index,set_1_month_All_share_index]=useState('')
   const    [_1_month_twenty_share_index,set_1_month_Twenty_share_index]=useState('')
   const    [_1_month_market_cap,set_1_month_Market_cap]=useState('')
   const    [_1_month_twenty_five_share_index,set_1_month_Twenty_five_share_index]=useState('')
   const    [_1_month_price,set_1_month_price]=useState('')
   const    [_1_month_instrument_market_cap,set_1_month_instrument_market_cap]=useState('')

   //3month
   const    [_3_month_all_share_index,set_3_month_All_share_index]=useState('')
   const    [_3_month_twenty_share_index,set_3_month_Twenty_share_index]=useState('')
   const    [_3_month_market_cap,set_3_month_Market_cap]=useState('')
   const    [_3_month_twenty_five_share_index,set_3_month_Twenty_five_share_index]=useState('')
   const    [_3_month_price,set_3_month_price]=useState('')
   const    [_3_month_instrument_market_cap,set_3_month_instrument_market_cap]=useState('')

    //6month
    const    [_6_month_all_share_index,set_6_month_All_share_index]=useState('')
    const    [_6_month_twenty_share_index,set_6_month_Twenty_share_index]=useState('')
    const    [_6_month_market_cap,set_6_month_Market_cap]=useState('')
    const    [_6_month_twenty_five_share_index,set_6_month_Twenty_five_share_index]=useState('')
    const    [_6_month_price,set_6_month_price]=useState('')
    const    [_6_month_instrument_market_cap,set_6_month_instrument_market_cap]=useState('')


    //12month
    const    [_12_month_all_share_index,set_12_month_All_share_index]=useState('')
    const    [_12_month_twenty_share_index,set_12_month_Twenty_share_index]=useState('')
    const    [_12_month_market_cap,set_12_month_Market_cap]=useState('')
    const    [_12_month_twenty_five_share_index,set_12_month_Twenty_five_share_index]=useState('')
    const    [_12_month_price,set_12_month_price]=useState('')
    const    [_12_month_instrument_market_cap,set_12_month_instrument_market_cap]=useState('')


    //2 yrs
    const    [_2_years_all_share_index,set_2_years_All_share_index]=useState('')
    const    [_2_years_twenty_share_index,set_2_years_Twenty_share_index]=useState('')
    const    [_2_years_market_cap,set_2_years_Market_cap]=useState('')
    const    [_2_years_twenty_five_share_index,set_2_years_Twenty_five_share_index]=useState('')
    const    [_2_years_price,set_2_years_price]=useState('')
    const    [_2_years_instrument_market_cap,set_2_years_instrument_market_cap]=useState('')

    //3 yrs
    const    [_3_years_all_share_index,set_3_years_All_share_index]=useState('')
    const    [_3_years_twenty_share_index,set_3_years_Twenty_share_index]=useState('')
    const    [_3_years_market_cap,set_3_years_Market_cap]=useState('')
    const    [_3_years_twenty_five_share_index,set_3_years_Twenty_five_share_index]=useState('')
    const    [_3_years_price,set_3_years_price]=useState('')
    const    [_3_years_instrument_market_cap,set_3_years_instrument_market_cap]=useState('')

    //5 yrs
    const    [_5_years_all_share_index,set_5_years_All_share_index]=useState('')
    const    [_5_years_twenty_share_index,set_5_years_Twenty_share_index]=useState('')
    const    [_5_years_market_cap,set_5_years_Market_cap]=useState('')
    const    [_5_years_twenty_five_share_index,set_5_years_Twenty_five_share_index]=useState('')
    const    [_5_years_price,set_5_years_price]=useState('')
    const    [_5_years_instrument_market_cap,set_5_years_instrument_market_cap]=useState('')
  
   const  [issno]=useState('KE1000001402')

    const getData=()=>{
        axios.post("https://www.deveintapps.com/nseticker/api/v1/tracker",{ isinno : issno})
        .then(res=>{
            const tracker= res.data.message;
 
        //tyd
        setYTD_All_share_index(JSON.stringify(tracker.market.YTD.all_share_index,undefined,4))
        setYTD_Twenty_share_index(JSON.stringify(tracker.market.YTD.twenty_share_index,undefined,4))
        setYTD_Market_cap(JSON.stringify(tracker.market.YTD.market_cap,undefined,4))
        setYTD_Twenty_five_share_index(JSON.stringify(tracker.market.YTD.twenty_five_share_index,undefined,4))
        setYTD_price(JSON.stringify(tracker.instrument.YTD.price,undefined,4))
        setYTD_instrument_market_cap(JSON.stringify(tracker.instrument.YTD.market_cap,undefined,4))

        //2 weeks
        set2Weeks_All_share_index(JSON.stringify(tracker.market['2 Weeks'].all_share_index,undefined,4))
        set2Weeks_Twenty_share_index(JSON.stringify(tracker.market['2 Weeks'].twenty_share_index,undefined,4))
        set2Weeks_Market_cap(JSON.stringify(tracker.market['2 Weeks'].market_cap,undefined,4))
        set2Weeks_Twenty_five_share_index(JSON.stringify(tracker.market['2 Weeks'].twenty_five_share_index,undefined,4))
        set2Weeks_price(JSON.stringify(tracker.instrument['2 Weeks'].price,undefined,4))
        set2Weeks_instrument_market_cap(JSON.stringify(tracker.instrument['2 Weeks'].market_cap,undefined,4))

        //1 month
        set_1_month_All_share_index(JSON.stringify(tracker.market['1 Month'].all_share_index,undefined,4))
        set_1_month_Twenty_share_index(JSON.stringify(tracker.market['1 Month'].twenty_share_index,undefined,4))
        set_1_month_Market_cap(JSON.stringify(tracker.market['1 Month'].market_cap,undefined,4))
        set_1_month_Twenty_five_share_index(JSON.stringify(tracker.market['1 Month'].twenty_five_share_index,undefined,4))
        set_1_month_price(JSON.stringify(tracker.instrument['1 Month'].price,undefined,4))
        set_1_month_instrument_market_cap(JSON.stringify(tracker.instrument['1 Month'].market_cap,undefined,4))

        //3 months
        set_3_month_All_share_index(JSON.stringify(tracker.market['3 Months'].all_share_index,undefined,4))
        set_3_month_Twenty_share_index(JSON.stringify(tracker.market['3 Months'].twenty_share_index,undefined,4))
        set_3_month_Market_cap(JSON.stringify(tracker.market['3 Months'].market_cap,undefined,4))
        set_3_month_Twenty_five_share_index(JSON.stringify(tracker.market['3 Months'].twenty_five_share_index,undefined,4))
        set_3_month_price(JSON.stringify(tracker.instrument['3 Months'].price,undefined,4))
        set_3_month_instrument_market_cap(JSON.stringify(tracker.instrument['3 Months'].market_cap,undefined,4))

        //6 months
        set_6_month_All_share_index(JSON.stringify(tracker.market['6 Months'].all_share_index,undefined,4))
        set_6_month_Twenty_share_index(JSON.stringify(tracker.market['6 Months'].twenty_share_index,undefined,4))
        set_6_month_Market_cap(JSON.stringify(tracker.market['6 Months'].market_cap,undefined,4))
        set_6_month_Twenty_five_share_index(JSON.stringify(tracker.market['6 Months'].twenty_five_share_index,undefined,4))
        set_6_month_price(JSON.stringify(tracker.instrument['6 Months'].price,undefined,4))
        set_6_month_instrument_market_cap(JSON.stringify(tracker.instrument['6 Months'].market_cap,undefined,4))

        //12 months
        set_12_month_All_share_index(JSON.stringify(tracker.market['12 Months'].all_share_index,undefined,4))
        set_12_month_Twenty_share_index(JSON.stringify(tracker.market['12 Months'].twenty_share_index,undefined,4))
        set_12_month_Market_cap(JSON.stringify(tracker.market['12 Months'].market_cap,undefined,4))
        set_12_month_Twenty_five_share_index(JSON.stringify(tracker.market['12 Months'].twenty_five_share_index,undefined,4))
        set_12_month_price(JSON.stringify(tracker.instrument['12 Months'].price,undefined,4))
        set_12_month_instrument_market_cap(JSON.stringify(tracker.instrument['12 Months'].market_cap,undefined,4))

        //2 yrs
        set_2_years_All_share_index(JSON.stringify(tracker.market['2 Years'].all_share_index,undefined,4))
        set_2_years_Twenty_share_index(JSON.stringify(tracker.market['2 Years'].twenty_share_index,undefined,4))
        set_2_years_Market_cap(JSON.stringify(tracker.market['2 Years'].market_cap,undefined,4))
        set_2_years_Twenty_five_share_index(JSON.stringify(tracker.market['2 Years'].twenty_five_share_index,undefined,4))
        set_2_years_price(JSON.stringify(tracker.instrument['2 Years'].price,undefined,4))
        set_2_years_instrument_market_cap(JSON.stringify(tracker.instrument['2 Years'].market_cap,undefined,4))

        //3 yrs
        set_3_years_All_share_index(JSON.stringify(tracker.market['3 Years'].all_share_index,undefined,4))
        set_3_years_Twenty_share_index(JSON.stringify(tracker.market['3 Years'].twenty_share_index,undefined,4))
        set_3_years_Market_cap(JSON.stringify(tracker.market['3 Years'].market_cap,undefined,4))
        set_3_years_Twenty_five_share_index(JSON.stringify(tracker.market['3 Years'].twenty_five_share_index,undefined,4))
        set_3_years_price(JSON.stringify(tracker.instrument['3 Years'].price,undefined,4))
        set_3_years_instrument_market_cap(JSON.stringify(tracker.instrument['3 Years'].market_cap,undefined,4))

        //5 yrs
        set_5_years_All_share_index(JSON.stringify(tracker.market['5 Years'].all_share_index,undefined,4))
        set_5_years_Twenty_share_index(JSON.stringify(tracker.market['5 Years'].twenty_share_index,undefined,4))
        set_5_years_Market_cap(JSON.stringify(tracker.market['5 Years'].market_cap,undefined,4))
        set_5_years_Twenty_five_share_index(JSON.stringify(tracker.market['5 Years'].twenty_five_share_index,undefined,4))
        set_5_years_price(JSON.stringify(tracker.instrument['5 Years'].price,undefined,4))
        set_5_years_instrument_market_cap(JSON.stringify(tracker.instrument['5 Years'].market_cap,undefined,4))
                
        })
    }
    useEffect(()=>{
        getData()
        return ()=>{
            getData();
        }
    },[])
    
    return(
       <div className="ovf" >
            <table >  
                <thead >
                    <tr >
                        <th className="tracker-col-1-head ">Change Metric</th>
                        <th className="trackerHead">Safaricom (%)</th>
                        <th className="trackerHead">NSE All Share Index (%)</th>
                        <th className="trackerHead">NSE All Share Index (%)</th>
                        <th className="trackerHead">NSE 25 Share Index (%)</th>
                        <th className="trackerHead">SCOM Market Cap</th>
                        <th className="trackerHead">Total Market Cap</th>
                    </tr>
                </thead>
                <tbody>
            
                    <tr>
                        <td className="tracker-col-1">Year To Date (YTD)</td>
                        <td className="tracker-data">
                            <span   className={YTD_price<0  ? "neg" :  "pos"} >{YTD_price}</span>
                        </td>
                        <td className="tracker-data">
                                <span  className={YTD_all_share_index<0  ? "neg" :  "pos"}>{YTD_all_share_index}</span>
                        </td>
                        <td className="tracker-data">
                            <span   className={YTD_twenty_share_index<0  ? "neg" :  "pos"}>{YTD_twenty_share_index}</span>
                        </td>
                        <td className="tracker-data">
                            <span     className={YTD_twenty_five_share_index<0  ? "neg" :  "pos"}>{YTD_twenty_five_share_index}</span>
                        </td>
                        <td className="tracker-data">
                            <span   className={YTD_instrument_market_cap<0  ? "neg" :  "pos"}>{YTD_instrument_market_cap}</span>
                        </td>
                        <td className="tracker-data">
                                <span   className={YTD_market_cap<0  ? "neg" :  "pos"}>{YTD_market_cap}</span>
                        </td>
                    </tr>

                    <tr>
                        <td className="tracker-col-1">2 Weeks</td>
                        <td className="tracker-data">
                                <span  className={_2_Weeks_price<0  ? "neg" :  "pos"}>{_2_Weeks_price}</span>
                        </td>
                        <td className="tracker-data">
                                <span  className={_2_Weeks_all_share_index<0  ? "neg" :  "pos"}>{_2_Weeks_all_share_index}</span>
                        </td>
                        <td className="tracker-data">
                            <span  className={_2_Weeks_twenty_share_index<0  ? "neg" :  "pos"}>{_2_Weeks_twenty_share_index}</span>
                        </td>
                        <td className="tracker-data">
                            <span className={_2_Weeks_twenty_five_share_index<0  ? "neg" :  "pos"}>{_2_Weeks_twenty_five_share_index}</span>
                        </td>
                        <td className="tracker-data">
                            <span  className={_2_instrument_market_cap<0  ? "neg" :  "pos"}>{_2_instrument_market_cap}</span>
                        </td>
                        <td className="tracker-data">
                                <span className={_2_Weeks_market_cap<0  ? "neg" :  "pos"}>{_2_Weeks_market_cap}</span>
                        </td>
                    </tr>

                    <tr>
                        <td className="tracker-col-1">1 Month</td>
                        <td className="tracker-data">
                                <span   className={_1_month_price<0  ? "neg" :  "pos"}>{_1_month_price}</span>
                        </td>
                        <td className="tracker-data">
                                <span   className={_1_month_all_share_index<0  ? "neg" :  "pos"}>{_1_month_all_share_index}</span>
                        </td>
                        <td className="tracker-data">
                            <span className={_1_month_twenty_share_index<0  ? "neg" :  "pos"}>{_1_month_twenty_share_index}</span>
                        </td>
                        <td className="tracker-data">
                            <span className={_1_month_twenty_five_share_index<0  ? "neg" :  "pos"}>{_1_month_twenty_five_share_index}</span>
                        </td>
                        <td className="tracker-data">
                            <span  className={_1_month_instrument_market_cap<0  ? "neg" :  "pos"}>{_1_month_instrument_market_cap}</span>
                        </td>
                        <td className="tracker-data">
                                <span  className={_1_month_market_cap<0  ? "neg" :  "pos"}>{_1_month_market_cap}</span>
                        </td>
                    </tr>
                        <tr>
                        <td className="tracker-col-1">3 Months</td>
                        <td className="tracker-data">
                                <span  className={_3_month_price<0  ? "neg" :  "pos"}>{_3_month_price}</span>
                        </td>
                        <td className="tracker-data">
                                <span className={_3_month_all_share_index<0  ? "neg" :  "pos"}>{_3_month_all_share_index}</span>
                        </td>
                        <td className="tracker-data">
                            <span  className={_3_month_twenty_share_index<0  ? "neg" :  "pos"}>{_3_month_twenty_share_index}</span>
                        </td>
                        <td className="tracker-data">
                            <span  className={_3_month_twenty_five_share_index<0  ? "neg" :  "pos"}>{_3_month_twenty_five_share_index}</span>
                        </td>
                        <td className="tracker-data">
                            <span  className={_3_month_instrument_market_cap<0  ? "neg" :  "pos"}>{_3_month_instrument_market_cap}</span>
                        </td>
                        <td className="tracker-data">
                                <span   className={_3_month_market_cap<0  ? "neg" :  "pos"}>{_3_month_market_cap}</span>
                        </td>
                    </tr>

                    <tr>
                        <td className="tracker-col-1">6 Months</td>
                        <td className="tracker-data">
                                <span    className={_6_month_price<0  ? "neg" :  "pos"}>{_6_month_price}</span>
                        </td>
                        <td className="tracker-data">
                                <span    className={_6_month_all_share_index<0  ? "neg" :  "pos"}>{_6_month_all_share_index}</span>
                        </td>
                        <td className="tracker-data">
                            <span    className={_6_month_twenty_share_index<0  ? "neg" :  "pos"}>{_6_month_twenty_share_index}</span>
                        </td>
                        <td className="tracker-data">
                            <span    className={_6_month_twenty_five_share_index<0  ? "neg" :  "pos"}>{_6_month_twenty_five_share_index}</span>
                        </td>
                        <td className="tracker-data">
                            <span    className={_6_month_instrument_market_cap<0  ? "neg" :  "pos"}>{_6_month_instrument_market_cap}</span>
                        </td>
                        <td className="tracker-data">
                                <span    className={_6_month_market_cap<0  ? "neg" :  "pos"}>{_6_month_market_cap}</span>
                        </td>
                    </tr>

                    <tr>
                        <td className="tracker-col-1">12 Months</td>
                        <td className="tracker-data">
                                <span    className={_12_month_price<0  ? "neg" :  "pos"}>{_12_month_price}</span>
                        </td>
                        <td className="tracker-data">
                                <span    className={_12_month_all_share_index<0  ? "neg" :  "pos"}>{_12_month_all_share_index}</span>
                        </td>
                        <td className="tracker-data">
                            <span    className={_12_month_twenty_share_index<0  ? "neg" :  "pos"}>{_12_month_twenty_share_index}</span>
                        </td>
                        <td className="tracker-data">
                            <span    className={_12_month_twenty_five_share_index<0  ? "neg" :  "pos"}>{_12_month_twenty_five_share_index}</span>
                        </td>
                        <td className="tracker-data">
                            <span    className={_12_month_instrument_market_cap<0  ? "neg" :  "pos"}>{_12_month_instrument_market_cap}</span>
                        </td>
                        <td className="tracker-data">
                                <span    className={_12_month_market_cap<0  ? "neg" :  "pos"}>{_12_month_market_cap}</span>
                        </td>
                    </tr>

                    <tr>
                        <td className="tracker-col-1">2 Years</td>
                        <td className="tracker-data">
                                <span    className={_2_years_price<0  ? "neg" :  "pos"}>{_2_years_price}</span>
                        </td>
                        <td className="tracker-data">
                                <span    className={_2_years_all_share_index<0  ? "neg" :  "pos"}>{_2_years_all_share_index}</span>
                        </td>
                        <td className="tracker-data">
                            <span    className={_2_years_twenty_share_index<0  ? "neg" :  "pos"}>{_2_years_twenty_share_index}</span>
                        </td>
                        <td className="tracker-data">
                            <span    className={_2_years_twenty_five_share_index<0  ? "neg" :  "pos"}>{_2_years_twenty_five_share_index}</span>
                        </td>
                        <td className="tracker-data">
                            <span    className={_2_years_instrument_market_cap<0  ? "neg" :  "pos"}>{_2_years_instrument_market_cap}</span>
                        </td>
                        <td className="tracker-data">
                                <span    className={_2_years_market_cap<0  ? "neg" :  "pos"}>{_2_years_market_cap}</span>
                        </td>
                    </tr>

                    <tr>
                        <td className="tracker-col-1">3 Years</td>
                        <td className="tracker-data">
                                <span  className={_3_years_price<0  ? "neg" :  "pos"}>{_3_years_price}</span>
                        </td>
                        <td className="tracker-data">
                                <span  className={_3_years_all_share_index<0  ? "neg" :  "pos"}>{_3_years_all_share_index}</span>
                        </td>
                        <td className="tracker-data">
                            <span  className={_3_years_twenty_share_index<0  ? "neg" :  "pos"}>{_3_years_twenty_share_index}</span>
                        </td>
                        <td className="tracker-data">
                            <span  className={_3_years_twenty_five_share_index<0  ? "neg" :  "pos"}>{_3_years_twenty_five_share_index}</span>
                        </td>
                        <td className="tracker-data">
                            <span  className={_3_years_instrument_market_cap<0  ? "neg" :  "pos"}>{_3_years_instrument_market_cap}</span>
                        </td>
                        <td className="tracker-data">
                                <span  className={_3_years_market_cap<0  ? "neg" :  "pos"}>{_3_years_market_cap}</span>
                        </td>
                    </tr>

                    <tr>
                        <td className="tracker-col-1">5 Years</td>
                        <td className="tracker-data">
                                <span  className={_5_years_price<0  ? "neg" :  "pos"}>{_5_years_price}</span>
                        </td>
                        <td className="tracker-data">
                                <span  className={_5_years_all_share_index<0  ? "neg" :  "pos"}>{_5_years_all_share_index}</span>
                        </td>
                        <td className="tracker-data">
                            <span  className={_5_years_twenty_share_index<0  ? "neg" :  "pos"}>{_5_years_twenty_share_index}</span>
                        </td>
                        <td className="tracker-data">
                            <span  className={_5_years_twenty_five_share_index<0  ? "neg" :  "pos"}>{_5_years_twenty_five_share_index}</span>
                        </td>
                        <td className="tracker-data">
                            <span  className={_5_years_instrument_market_cap<0  ? "neg" :  "pos"}>{_5_years_instrument_market_cap}</span>
                        </td>
                        <td className="tracker-data">
                                <span  className={_5_years_market_cap<0  ? "neg" :  "pos"}>{_5_years_market_cap}</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )   
}

export default Tracker;

 