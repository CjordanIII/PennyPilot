"use client";
import ReactECharts from "echarts-for-react";
import { PiechartDataProps } from "@/lib/interfaces";

// Function to get colors (create own pallet dynamicly )
const getColor = (index: number) => {
  const colors = ["#8100E8", "#80B89D", "#FFAA4F", "#F89456", "#03A530"];
  // repetes colors index is based on remainder
  return colors[index % colors.length];
};

const PieChart: React.FC<PiechartDataProps> = ({ titleData, legendData, data }) => {
  // Adding colors to each data segment
  const coloredData = data.map((item, index) => ({
    ...item,
    itemStyle: {
      color: getColor(index),  // Assign color based on index
    },
  }));

  const option = {
    // dynamic based on props
    title: titleData,
    axisPointer: {
      show: false,
    },
    legend: {
      orient: "vertical",  // Arrange legend items vertically
      left: 10,            // Position the legend on the left side
      top: "middle",       // Align the legend in the middle vertically
      data: legendData,    // dynamic data based on props
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
        data: coloredData,       // use colored data
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
