import {LinechartServicesTypes,GageChartServicesTypes,PieCharts} from "@/lib/interfaces"

export const lineChartData = ():LinechartServicesTypes => {
  return {
    data: {
      name:"Track your spending",
      series: [
        {
          name: "Planned",
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: "line",
          smooth: true,
        },
        {
          name: "Actual",
          data: [480, 750, 1080, 840, 1548, 1596, 1056],
          type: "line",
          smooth: true,
        },
      ],
      xAxis: {
        type: "category",
        data: ["January", "Ferbuary", "March", "April", "May", "June", "July"],
      },
      yAxis: {
        type: "value",
      },
    },
  };
};


export const gageCharts = ():GageChartServicesTypes=>{
  return{
    data:{
      title:"Monitor your budget",
      name:"New Computer",
      value:54,
    }
  }
}

export const pieCharts = ():PieCharts=>{
  return {
    data:{
      title:{
        text: "",
        subtext: "",
        left: "center"
      },
      legend:{
        data:["ItemA", "ItemB", "ItemD", "ItemC", "ItemE"]
      },
      data:[
        { value: 735, name: "ItemC" },
        { value: 510, name: "ItemD" },
        { value: 434, name: "ItemB" },
        { value: 335, name: "ItemA" },
      ]
    }
  }
}