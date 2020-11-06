import React, { useState,useEffect } from "react";
import CanvasJSReact from  '../../../../assets/canvasjs.stock.react'
import axios from "axios";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSStockChart = CanvasJSReact.CanvasJSStockChart;
 
const LineChart1=()=>{
    
    // const [price_volume,setPrice_volume]=useState([])
    // const [detailsTo,setDetailsTo]=useState('')
    // const [detailsFrom,setDetailsFrom]=useState('')
    const [detailsTo,setDetailsTo]=useState(null)
    const [detailsFrom,setDetailsFrom]=useState(null)

    const [dataPoints1,setDataPoints1]=useState([])
    const [dataPoints2,setDataPoints2]=useState([])
    const [dataPoints3,setDataPoints3]=useState([])
    const [isLoaded,setIsloaded]=useState(false)
    const [issno] =useState('KE1000001402')
    const [filter]=useState( '1Y' )
    // this.state = { dataPoints1: [], dataPoints2: [], dataPoints3: [], isLoaded: false };
  
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
       console.log(loop.message.price_volume[1].price+"this is loop.pricevolume .price");
      //  console.log(JSON.stringify(loop,undefined,4)+"this is loop to stringified");
       console.log(loop.message+"this is loop.message to");
       console.log(loop.message.details.to+"this is loop.message.details");
       console.log(loop.message.price_volume[1].volume+"this is loop.message.price_volume");
      
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
        // setPrice_volume(chart.price_volume)
        // setDetailsTo(chartParsed.details.to)
        // setDetailsFrom(chartParsed.details.from)
      })

      // fetch**********************
      //   fetch("https://canvasjs.com/data/docs/ltcusd2018.json")
      // .then(res => res.json())
      // .then(
      //   (loop) => {
      //   let dps1 = [], dps2 = [], dps3 = [];
      //   // const chart= res.data
      //   // const chartParsed =JSON.parse(chart,undefined,4)
      //   // const loop = JSON.stringify(chart,undefined,4)
      //   // console.log(loop+"this is loop")
 

      //   for (var i = 0; i < loop.length; i++) {
      //     dps1.push({ x: Number(new Date(loop[i].date)),y:  Number(loop[i].high)});
      //     dps2.push({x: Number(new Date(loop[i].date)), y: Number(loop[i].volume_usd)});
      //     dps3.push({x: Number(new Date(loop[i].date)), y: Number(loop[i].close)});
      //   }
      //   setIsloaded(true);
      //   setDataPoints1(dps1)
      //   setDataPoints2(dps2)
      //   setDataPoints3(dps3)
      //   setDetailsTo(detailsTo)
      //   setDetailsFrom(detailsFrom)
      //   // setPrice_volume(chart.price_volume)
      //   // setDetailsTo(chartParsed.details.to)
      //   // setDetailsFrom(chartParsed.details.from)
      // })
        // axios***********************
      // axios.post("https://www.deveintapps.com/nseticker/api/v1/stock-chart",{ isinno : issno ,filter : filter})
      // .then(res=>{
      //   let dps1 = [], dps2 = [], dps3 = [];
      //   const chart= res.data.message
      //   // const chartParsed =JSON.parse(chart,undefined,4)

      //   console.log(JSON.stringify(chart,undefined,4)+"this is chart")
      
        
      //   const loop=JSON.stringify(chart.price_volume,undefined,4)
      //   const detailsFrom=JSON.stringify(chart.details.from,undefined,4)
      //   const detailsTo=JSON.stringify(chart.details.to,undefined,4)
        
      //   console.log(loop+"this is .message.price volume");
      //   console.log(loop.length+"this is .message.price volume in length");
      //   for (let i = 0; i < loop.length; i++) {
      //     dps1.push({
      //       //    x: [
      //       //     new Date(loop[i].date)
      //       //  ],
      //         x:  [Number(new Date(loop[i].date))],
      //         y:  [Number(loop[i].price)],
      //     });
      //     dps2.push({
      //       //  x: [
      //       //   new Date(loop[i].date)
      //       // ],
      //        x:  [Number(new Date(loop[i].date))],
      //        y: [ Number(loop[i].volume)]
      //       })
      //     dps3.push({
      //       // x: new Date(loop[i].date),
      //      x:  [Number(new Date(loop[i].date))],
      //      y: [Number(loop[i].volume)]
      //     });
      //   }
      //   setIsloaded(true);
      //   setDataPoints1(dataPoints1.concat(dps1))
      //   setDataPoints2(dataPoints1.concat(dps2))
      //   setDataPoints3(dataPoints1.concat(dps3))
      //   setDetailsTo(detailsTo)
      //   setDetailsFrom(detailsFrom)
      //   // setPrice_volume(chart.price_volume)
      //   // setDetailsTo(chartParsed.details.to)
      //   // setDetailsFrom(chartParsed.details.from)
      // })
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
        // dataPoints : this.state.dataPoints1
        // dataPoints : [
        //   { x:2,  y: 10  },
        //   { x:4, y: 15  },
        //   { x:6, y: 25  },
        //   { x:8,  y: 30  },
        //   { x:10,  y: 28  }
        // ]
  
        // dataPoints :[ price_volume.map(data=>{
        //   return data.price
        // })]
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
        // dataPoints: [
        //   { label: "apple",  y: 10  },
        //   { label: "orange", y: 15  },
        //   { label: "banana", y: 25  },
        //   { label: "mango",  y: 30  },
        //   { label: "grape",  y: 28  }
        // ]
    
        // dataPoints :[ price_volume.map(data=>{
        //   return data.volume
        // })]
      }]
    }],
    navigator: {
      data: [{
        dataPoints :  dataPoints3,
        type: "line",
        color:'#39b54a',
        // dataPoints: [price_volume.map(data=>{
        //   return data.date
        // })]
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

    //Reference: https://reactjs.org/docs/faq-ajax.html#example-using-ajax-results-to-set-local-state
  //   fetch("https://canvasjs.com/data/docs/ltcusd2018.json")
  //     .then(res => res.json())
  //     .then(
  //       (data) => {
  //         var dps1 = [], dps2 = [], dps3 = [];
  //         for (var i = 0; i < data.length; i++) {
  //           dps1.push({
  //             x: new Date(data[i].date),
  //             y: [
  //               Number(data[i].open),
  //               Number(data[i].high),
  //               Number(data[i].low),
  //               Number(data[i].close)
  //             ]
  //           });
  //           dps2.push({x: new Date(data[i].date), y: Number(data[i].volume_usd)});
  //           dps3.push({x: new Date(data[i].date), y: Number(data[i].close)});
  //         }
  //         this.setState({
  //           isLoaded: true,
  //           dataPoints1: dps1,
  //           dataPoints2: dps2,
  //           dataPoints3: dps3
  //         });
  //       }
  //     )
  // }
 
 
   
 
// class LineChart1 extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { dataPoints1: [], dataPoints2: [], dataPoints3: [], isLoaded: false };
//   }
 
//   componentDidMount() {
//     //Reference: https://reactjs.org/docs/faq-ajax.html#example-using-ajax-results-to-set-local-state
//     fetch("https://canvasjs.com/data/docs/ltcusd2018.json")
//       .then(res => res.json())
//       .then(
//         (data) => {
//           var dps1 = [], dps2 = [], dps3 = [];
//           for (var i = 0; i < data.length; i++) {
//             dps1.push({
//               x: new Date(data[i].date),
//               y: [
//                 Number(data[i].open),
//                 Number(data[i].high),
//                 Number(data[i].low),
//                 Number(data[i].close)
//               ]
//             });
//             dps2.push({x: new Date(data[i].date), y: Number(data[i].volume_usd)});
//             dps3.push({x: new Date(data[i].date), y: Number(data[i].close)});
//           }
//           this.setState({
//             isLoaded: true,
//             dataPoints1: dps1,
//             dataPoints2: dps2,
//             dataPoints3: dps3
//           });
//         }
//       )
//   }
 
//   render() {
//     const options = {
//     //   theme: "dark2",
//       charts: [{
//         axisY: [{
//           tickLength: 0,
//           interval: 0,
 
//           lineColor: "blue"
//         }],
//         axisX: [{
//           lineThickness: 2,
//           tickLength: 0,
//           labelFormatter: function(e) {
//             return "";
//           },
//           crosshair: {
//             enabled: true,
//             color:'dimGrey',
//             lineDashType: "solid",
//             opacity: 0.6,  
//             snapToDataPoint: true,
//             labelFormatter: function(e) {
//               return "";
//             }
//           }
//         }],
//         toolTip: {
//           shared: true,
//           cornerRadius:7
//         },
//         data: [{  
//           name: "Price ",
//           type: "candlestick",
//           axisYType: "secondary",
          
//           color:'#39b54a',
//           dataPoints : this.state.dataPoints1
//         }]
//       },{
//         height: 100,
        
//         axisX: {
       
//           labelFontColor: "dimGrey",
//           lineColor: "dimGrey",
//           crosshair: {
//             enabled: true,
//             color:'dimGrey',
//             lineDashType: "solid",
//             opacity: 0.6,  
//             snapToDataPoint: true
//           },
          
//           labelFormatter: function (e) {
//             return CanvasJS.formatDate( e.value, "DD MMM");
//           },
//         },
//         axisY: {
//           minimum:500,
//           tickLength: 0,
//           interval: 0,
//         },
//         toolTip: {
//           shared: true,
//           cornerRadius:7
//         },
//         data: [{
//           type: "spline",
//           axisYType: "secondary",
       
//           color:'#39b54a',
//           dataPoints : this.state.dataPoints2
//         }]
//       }],
//       navigator: {
//         data: [{
//           dataPoints: this.state.dataPoints3
//         }],
//         slider: {
    
//           minimum: new Date("2018-05-01"),
//           maximum: new Date("2018-07-01")
//         }
//       },
//       rangeSelector: {
//         label: "Filter", 
//           inputFields: {
//             style: {
//               borderColor: "#bbb8b8",
//               borderColorOnFocus: "black",
//               FontFamily: "ubuntu",
//             }
//           },
//         buttonStyle: {
//           backgroundColor: "#e3e3e3",
//           backgroundColorOnHover: "#39b54a", 
//           backgroundColorOnSelect: "#39b54a",
//           borderColor:"white",
//           labelFontFamily: "ubuntu",
//           labelFontWeight: "bold",
//           borderThickness:0,
//           labelFontSize: 15,
//           width: 40 ,
//           radius:45,
//         },
//       }
//     };
//     const containerProps = {
//       width: "100%",
//       height: "450px",
//       margin: "auto"
//     };
//     return (
//       <div> 
//         <div>
//           {
//             // Reference: https://reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator
//             this.state.isLoaded && 
//             <CanvasJSStockChart containerProps={containerProps} options = {options}
//               /* onRef = {ref => this.chart = ref} */
//             />
//           }
//         </div>
//       </div>
//     );
//   }
// }
// export default LineChart1;     