
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
  let myPolarChart = document.getElementById('myPolarChart').getContext('2d');

  // Global Options
  Chart.defaults.global.defaultFontFamily = 'Lato';
  Chart.defaults.global.defaultFontSize = 20;
  Chart.defaults.global.defaultFontColor = '#ffffff';

  let massPolarChart = new Chart(myPolarChart, {

    type:'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data:{
      labels:labels,
      datasets:[{
        data:data,
        //backgroundColor:'green',

        borderWidth:1,
        borderColor:'#777',
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
