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
  let myChart = document.getElementById('myChart').getContext('2d');

  let massPopChart = new Chart(myChart, {

    type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
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
      layout:{
        padding:{
          left:0,
          right:0,
          bottom:0,
          top:0
        }
      },
      tooltips:{
        enabled:true
      }

}
});

</script>
