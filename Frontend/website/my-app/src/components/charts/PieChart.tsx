"use client";
import ReactECharts from "echarts-for-react";

const PieChart = ({ titleData, legend }) => {
  const option = {
    title: {
      text: "Weather Statistics",
      subtext: "Fake Data",
      left: "center",
    },
    axisPointer: {
      show: false,
    },
    legend: {
      orient: "vertical",  // Arrange legend items vertically
      left: 10,            // Position the legend on the left side
      top: "middle",       // Align the legend in the middle vertically
      data: ["CityA", "CityB", "CityD", "CityC", "CityE"],
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
        data: [
          { value: 735, name: "CityC" },
          { value: 510, name: "CityD" },
          { value: 434, name: "CityB" },
          { value: 335, name: "CityA" },
        ],
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
