import React ,{useState,useEffect}from'react';
import CanvasJSReact from  "../../../../assets/canvasjs.react" ;
import Spinner from "../../../Spinner/Spinner" 
const CanvasJSChart = CanvasJSReact.CanvasJSChart;
let CanvasJS = CanvasJSReact.CanvasJS;

const HoldingCalculatorGraph =({startDate,price,quantity})=> {
  
    const [dataPoints1,setDataPoints1]=useState([])
    const [dataPoints2,setDataPoints2]=useState([])
    const [isLoading,setIsLoading] =useState(false)

    useEffect(()=>{

    const getData= async ()=>{
  
        const res= await fetch("https://www.deveintapps.com/nseticker/api/v1/holdings-calculator", {
            method: 'POST', 
            body: JSON.stringify({
                isinno : 'KE1000001402',
                date : startDate=== "yyyy-mm-dd" ?   "2020-11-03" : startDate,
                type : "Buy", 
                quantity: quantity || 2,
                price : price  || 100
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
             
        })
        const json =  await res.json()
        const data = await json.message.graph
        let dps1 = [], dps2 = []

        for (let i = 0; i < data.length; i++) {
            dps1.push({ x: Number(new Date(JSON.stringify(data[i].date,undefined,4))),y:  Number(JSON.stringify(data[i].price,undefined,4))});
            dps2.push({x: Number(new Date(JSON.stringify(data[i].date,undefined,4))), y: Number(JSON.stringify(data[i].prev_price,undefined,4))});
        }
        setIsLoading(true)
        setDataPoints1(dps1)
        setDataPoints2(dps2)
    }
    getData()
    return()=>{
        getData()
    }
    },[startDate,price,quantity])
 
    const options = {
        animationEnabled: true,
        animationDuration:1200,
        axisX: {
            lineThickness: 2,
            tickLength: 0,
            valueFormatString: " DD MMM",
            labelFormatter: function (e) {
                return CanvasJS.formatDate( e.value, "DD MMM");
              },
              crosshair: {
                    enabled: true,
                    color:'dimGrey',
                    lineDashType: "solid",
                    opacity: 0.6,  
                    snapToDataPoint: true,
                    labelFormatter: function(e) {
                    return "";
                }
            }
        },
        axisY: {
            tickLength: 0,
            interval: 0,
            lineColor: "dimGrey",
            gridColor: "dimGrey",
            gridThickness: 0.5
        },
        toolTip: {
            shared: true,
            cornerRadius:7
        },
        data: [{
            type: "column",
            name: "Price",
            title: " Price",
            showInLegend:true,
            legendText: "Price",
            xValueFormatString: "MMM YYYY",
            yValueFormatString: "#,##0",
            color:'#39b54a',
            axisYType: "secondary",
            dataPoints:dataPoints1
        },{
            type: "line",
            color:"#ffbf00",
            name: "Prev price",
            title: " Prev Price",
            showInLegend: true,
            legendText: "Prev Price",
            yValueFormatString: "#,##0",
            axisYType: "primary",
           dataPoints: dataPoints2    
        }
    ]
    }
    return (
        <div>
            {
                isLoading ?  <CanvasJSChart options = {options}  /> : <Spinner />
            }       
        </div>
    );
	
}
export default React.memo(HoldingCalculatorGraph);         