import LineChart from "@/components/charts/LineChart";
import GageChart from "@/components/charts/GageChart";
import {lineChart,gaugeChart} from "@/actions/chartsAndGrpahs.actions"
import {LinechartServicesTypes,Series,Axis,GageChartServicesTypes} from "@/lib/interfaces"

const SectionThree = () => {
// data for line chart
  const linechart:LinechartServicesTypes = lineChart()
  const lineChartSeries:Series[] = linechart.data.series
  const lineChartxAxis:Axis = linechart.data.xAxis
  const lineChartyAxis:Axis = linechart.data.yAxis
  const lineChartName:string|undefined = linechart.data.name
// data for gage chart
const gageChart:GageChartServicesTypes = gaugeChart()
const gageChartName:string | undefined = gageChart.data.name
const gageChartValue: number = gageChart.data.value
const gagechartTable:string |undefined= gageChart.data.title

  return (
    <div className="flex justify-around  mb-5">
      <div className="w-6/12 p-10  bg-offwhite rounded-3xl shadow-sm">
        <LineChart series={lineChartSeries} xAxis={lineChartxAxis} yAxis={lineChartyAxis} />
        <h1 className="font-bricolage text-4xl text-center py-10 ">
          {lineChartName}
        </h1>
      </div>
      <div className="w-2/5  bg-offwhite rounded-3xl shadow-sm">
        <div className="h-96">
          <GageChart name={gageChartName} value={gageChartValue} fontSize={25} />
          <h1 className="font-bricolage text-4xl text-center py-8 ">
            {gagechartTable}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
