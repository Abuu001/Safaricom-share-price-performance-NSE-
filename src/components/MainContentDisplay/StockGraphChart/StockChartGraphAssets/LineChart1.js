import React, { useState,useEffect } from "react";
import CanvasJSReact from  '../../../../assets/canvasjs.stock.react'
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSStockChart = CanvasJSReact.CanvasJSStockChart;
 
const LineChart1=()=>{

    const [detailsTo,setDetailsTo]=useState(null)
    const [detailsFrom,setDetailsFrom]=useState(null)

    const [dataPoints1,setDataPoints1]=useState([])
    const [dataPoints2,setDataPoints2]=useState([])
    const [dataPoints3,setDataPoints3]=useState([])
    const [isLoaded,setIsloaded]=useState(false)
    const [issno] =useState('KE1000001402')
    const [filter]=useState( '1Y' )
  
    const getData=()=>{
  
      fetch("https://www.deveintapps.com/nseticker/api/v1/stock-chart", {
              method: 'POST', 
              body: JSON.stringify({
                isinno : issno,
                filter : filter
              }),
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              
      })
      .then(res => res.json())
      .then(
        (loop) => {
        let dps1 = [], dps2 = [], dps3 = [];
      
       const To=loop.message.details.to
       const From=loop.message.details.from 
       
        for (var i = 0; i < loop.message.price_volume.length; i++) {
          dps1.push({ x: Number(new Date(loop.message.price_volume[i].date)),y:  Number(loop.message.price_volume[i].price)});
          dps2.push({x: Number(new Date(loop.message.price_volume[i].date)), y: Number(loop.message.price_volume[i].volume)});
          dps3.push({x: Number(new Date(loop.message.price_volume[i].date)), y: Number(loop.message.price_volume[i].volume)});
        }
        setIsloaded(true);
        setDataPoints1(dps1)
        setDataPoints2(dps2)
        setDataPoints3(dps3)
        setDetailsTo(To)
        setDetailsFrom(From)

      })

  }
  
  useEffect(()=>{
    getData()

    return()=>{
      getData()
    }
  },[])

  const options = {
    charts: [{
      animationEnabled : true,
      animationDuration:1200,
      axisY: [{
        tickLength: 0,
        interval: 0,

        lineColor: "blue"
      }],
      axisX: [{
        lineThickness: 2,
        tickLength: 0,
        labelFormatter: function(e) {
          return "";
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
      }],

      toolTip: {
        shared: true,
        cornerRadius:7
      },
      data: [{  
        type: "spline",
        name: "Price ",
        axisYType: "secondary",
        color:'#39b54a',
        dataPoints: dataPoints1
      }]
    },{
      height: 100,
      axisX: {
     
        labelFontColor: "dimGrey",
        lineColor: "dimGrey",
        crosshair: {
          enabled: true,
          color:'dimGrey',
          lineDashType: "solid",
          opacity: 0.6,  
          snapToDataPoint: true
        },
        
        labelFormatter: function (e) {
          return CanvasJS.formatDate( e.value, "DD MMM");
        },
      },
      axisY: {
        minimum:500,
        tickLength: 0,
        interval: 0,
       
      },
      toolTip: {
        shared: true,
        cornerRadius:7
      },
      data: [{
        type: "column",
        axisYType: "secondary",
        name: "Volume",
        color:'#39b54a',
        valueFormatString:"#,###,,.##M",
        dataPoints :dataPoints2
       
      }]
    }],
    navigator: {
      data: [{
        dataPoints :  dataPoints3,
        type: "line",
        color:'#39b54a',
    
      }],
      slider: {
        minimum:  Number(new Date(detailsFrom)),
        maximum:  Number(new Date(detailsTo))
          // minimum: new Date("2018-05-01"),
          // maximum: new Date("2018-07-01")
      }
    },
    rangeSelector: {
      label: "Filter", 
        inputFields: {
          startValue: Number(new Date(detailsFrom)),
          endValue: Number(new Date(detailsTo)),
          style: {
            borderColor: "#bbb8b8",
            borderColorOnFocus: "black",
            FontFamily: "ubuntu",
          }
        },
      buttonStyle: {
        backgroundColor: "#e3e3e3",
        backgroundColorOnHover: "#39b54a", 
        backgroundColorOnSelect: "#39b54a",
        borderColor:"white",
        labelFontFamily: "ubuntu",
        labelFontWeight: "bold",
        borderThickness:0,
        labelFontSize: 15,
        width: 40 ,
        radius:45,
      },
    }
  };
  const containerProps = {
    width: "100%",
    height: "450px",
    margin: "auto"
  };

  return (
    <div> 
      <div>
        {
          isLoaded && 
          <CanvasJSStockChart containerProps={containerProps} options = {options} />
        }
      </div>
    </div>
  );

}
export default LineChart1;     
 