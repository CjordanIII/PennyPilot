"use client";
import ReactECharts from "echarts-for-react";
import {GageChartTypes} from "@/lib/interfaces";

// TODO mke this more dynamic
const GageChart:React.FC<GageChartTypes> = ({name="no name",value=0,fontSize,lineStyleWidth=40,percentSize=30,lineColor="#FFA500",bkPercentColor="#000000"}) => {
  const gaugeData = [
    {
      value: value,

      name: name,
      title: {
        offsetCenter: ["0%", "-20%"],
        textStyle:{
          fontSize:fontSize
        }
      },

      progress: {
        show: true,
        overlap: false,
        roundCap: true,
        clip: false,
        itemStyle: {
          borderWidth: 1,
          color: lineColor,
        },
      },

      detail: {
        color: bkPercentColor,
      
        valueAnimation: true,
        offsetCenter: ["0%", "10%"],
      },
    },
    // {
    //   value: 40,
    //   name: 'Good',
    //   title: {
    //     offsetCenter: ['0%', '0%']
    //   },
    //   detail: {
    //     valueAnimation: true,
    //     offsetCenter: ['0%', '10%']
    //   }
    // },
    // {
    //   value: 60,
    //   name: 'Commonly',
    //   title: {
    //     offsetCenter: ['0%', '30%']
    //   },
    //   detail: {
    //     valueAnimation: true,
    //     offsetCenter: ['0%', '40%']
    //   }
    // }
  ];
  const option = {
    series: [
      {
        type: "gauge",
        startAngle: 90,
        endAngle: -270,
        pointer: {
          show: false,
        },

        progress: {
          show: true,
          overlap: false,
          roundCap: true,
          clip: false,
          itemStyle: {
            borderWidth: 1,
            borderColor: lineColor,
          },
        },
        axisLine: {
          lineStyle: {
            width: lineStyleWidth,
          },
        },
        splitLine: {
          show: false,
          distance: 0,
          length: 10,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
          distance: 50,
        },
        data: gaugeData,

        title: {
          fontSize: fontSize,
        },

        detail: {
          width: 50,
          height: 14,
          textStyle: { fontSize: percentSize  },
          fontSize: fontSize,
          color: "inherit",
          borderColor: "inherit",
          formatter: "{value}%",
        },
      },
    ],
  };
  return (
    <ReactECharts option={option} style={{ height: "100%", width: "100%" }} />
  );
};

export default GageChart;
