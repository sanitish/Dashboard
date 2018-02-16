<script>

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
  let myPieChart = document.getElementById('myPieChart').getContext('2d');

  // Global Options
  Chart.defaults.global.defaultFontFamily = 'Lato';
  Chart.defaults.global.defaultFontSize = 20;
  Chart.defaults.global.defaultFontColor = '#000';

  let massPoChart = new Chart(myPieChart, {

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

</script>
