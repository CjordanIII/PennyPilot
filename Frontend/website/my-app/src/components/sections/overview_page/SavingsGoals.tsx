import GageChart from '@/components/charts/GageChart'
import PieChart from '@/components/charts/PieChart'

const SavingsGoals = () => {
  return (
    <section className="">
    <h1 className="text-2xl">Savings Goals</h1>
    <div className="w-96 h-96 bg-white rounded-3xl shadow-sm ">
      <GageChart title="" fontSize={25} />
    </div>
    <div>
      <PieChart/>
    </div>
  </section>
  )
}

export default SavingsGoals