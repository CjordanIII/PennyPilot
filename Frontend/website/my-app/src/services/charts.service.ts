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
        text: "Weather Statistics",
        subtext: "Fake Data",
        left: "center"
      },
      legend:{
        data:["CityA", "CityB", "CityD", "CityC", "CityE"]
      },
      data:[
        { value: 735, name: "CityC" },
        { value: 510, name: "CityD" },
        { value: 434, name: "CityB" },
        { value: 335, name: "CityA" },
      ]
    }
  }
}