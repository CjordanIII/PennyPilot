"use client";
import ReactECharts from "echarts-for-react";
import {PiechartDataProps} from "@/lib/interfaces"

const PieChart:React.FC<PiechartDataProps> = ({ titleData, legendData,data }) => {
  const option = {
    // dynaimc based on props
    title: titleData,
    axisPointer: {
      show: false,
    },
    legend: {
      orient: "vertical",  // Arrange legend items vertically
      left: 10,            // Position the legend on the left side
      top: "middle",       // Align the legend in the middle vertically
      data: legendData, // dynamic data baed on props
      textStyle: {
        color: "#000",     // Customize text color if needed
      },
      itemWidth: 14,       // Width of legend color block
      itemHeight: 14,      // Height of legend color block
      formatter: function (name: any) {
        return name;
      },
    },
    series: [
      {
        type: "pie",
        radius: "65%",
        center: ["50%", "50%"],  // Adjust center to accommodate legend
        selectedMode: "single",
        data: data, // dynamic data based on props
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
          label: {
            show: true,  // Show labels on hover or click
          },
          labelLine: {
            show: true,  // Show label lines on hover or click
          },
        },
        label: {
          show: false,  // Hide labels by default
        },
        labelLine: {
          show: false,  // Hide label lines by default
        },
      },
    ],
  };
  return <ReactECharts option={option} />;
};

export default PieChart;
