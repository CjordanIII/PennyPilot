import GageChart from '@/components/charts/GageChart'
import PieChart from '@/components/charts/PieChart'
import {pieChart} from "@/actions/chartsAndGrpahs.actions"
import {PieCharts,PieChartTitle,PieData} from "@/lib/interfaces"
const SavingsGoals = () => {
  const piechart:PieCharts = pieChart()

  const titleData:PieChartTitle = piechart.data.title
  const legendData:string[] = piechart.data.legend.data
  const data:PieData[]=piechart.data.data

  return (
    <section className="">
    <h1 className="text-2xl">Savings Goals</h1>
    <div className="w-96 h-96 bg-white rounded-3xl shadow-sm ">
      <GageChart title="" fontSize={25} />
    </div>
    <div>
      <PieChart titleData={titleData} legendData={legendData} data={data}/>
    </div>
  </section>
  )
}

export default SavingsGoals