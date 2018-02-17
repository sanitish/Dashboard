
var myObj;
myObj = [{ "type":"text",
"data": 25},
{ "type":"ppt",
"data": 15},
{ "type":"doc",
"data": 125},{ "type":"image",
"data": 35},{ "type":"pdf",
"data": 135}];

var labels = myObj.map((val)=>{
return val.type;
});

var data = myObj.map((val)=>{
return val.data;
});
console.log(labels);
//console.log(myObj)
  let myHoriChart = document.getElementById('myHoriChart').getContext('2d');
  Chart.defaults.global.defaultFontFamily = 'Lato';
  Chart.defaults.global.defaultFontSize = 20;
  Chart.defaults.global.defaultFontColor = '#ffffff';
  let massHoriChart = new Chart(myHoriChart, {

    type:'horizontalBar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data:{

      labels:labels,
      datasets:[{
        data:data,
        //backgroundColor:'green',
        backgroundColor:[
          'rgba(128,128,128,0.1)',
          'rgba(128,128,128,0.1)'

              ],
        borderWidth:1,
        borderColor:'#FFF',
        hoverBorderWidth:3,
        hoverBorderColor:'#000'
      }]
    },
    options:{

      legend:{
        display:false,
        position:'right',
        labels:{
          fontColor:'#000'
        }
      },
      tooltips:{
        enabled:true
      }

}
});
