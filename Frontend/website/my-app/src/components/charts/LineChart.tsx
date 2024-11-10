"use client"
import ReactECharts from 'echarts-for-react';

const LineChart = () => {
    const options = {
        toolbox: {
            feature: {
                saveAsImage: {},
                dataZoom: {},
            }
        },
        grid: { top: 8, right: 8, bottom: 24, left: 36 },
        xAxis: {
          type: 'category',
          data: ['January', 'Ferbuary', 'March', 'April', 'May', 'June', 'July'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            name:"Planned",
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true,
          },
          {
            name:"Actual",
            data: [480, 750, 1080, 840, 1548, 1596, 1056],
            type: 'line',
            smooth: true,
          },
        ],
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