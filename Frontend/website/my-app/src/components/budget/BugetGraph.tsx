import React from "react";
import PieChart from "@/components/charts/PieChart";
import { PieCharts, PieChartTitle, PieData } from "@/lib/interfaces";
import { pieChart } from "@/actions/chartsAndGrpahs.actions";
const BugetGraph = () => {
  const piechart: PieCharts = pieChart();
  const titleData: PieChartTitle = piechart.data.title;
  const legendData: string[] = piechart.data.legend.data;
  const data: PieData[] = piechart.data.data;
  return (
    <section>
      <div className="scale-125 w-96">
        <PieChart titleData={titleData} legendData={legendData} data={data} />
      </div>
    </section>
  );
};

export default BugetGraph;
