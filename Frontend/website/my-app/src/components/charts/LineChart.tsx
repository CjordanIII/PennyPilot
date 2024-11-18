"use client"
import ReactECharts from 'echarts-for-react';
import { LineCharttypes } from '@/lib/interfaces';
// TODO mke this more dynamic
const LineChart:React.FC<LineCharttypes> = ({series=[],xAxis={},yAxis={}}) => {
  // series{
  //   name:"Planned",
  //   data: [820, 932, 901, 934, 1290, 1330, 1320],
  //   type: 'line',
  //   smooth: true,
  // },
  // xAxis: {
  //   type: 'category',
  //   data: ['January', 'Ferbuary', 'March', 'April', 'May', 'June', 'July'],
  // },
  // yAxis: {
  //   type: 'value',
  // },

    const options = {
        toolbox: {
            feature: {
                saveAsImage: {},
                dataZoom: {},
            }
        },
        grid: { top: 8, right: 8, bottom: 24, left: 36 },
        xAxis:xAxis,
        yAxis: yAxis,
        series: series,
        legend:{
            show:true
        },
        tooltip: {
          trigger: 'axis',
        },
      };
    
      return <ReactECharts option={options} />;
}

export default LineChart