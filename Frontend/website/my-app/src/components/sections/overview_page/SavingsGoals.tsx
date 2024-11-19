import GageChart from "@/components/charts/GageChart";
import { GeistSans } from "geist/font/sans";
const SavingsGoals = () => {
  return (
    // TODO add data values
    // TODO make dynamic
    <section>
      <h1 className="text-2xl pb-4">Savings Goals</h1>
      <div className="bg-white rounded-3xl shadow-sm flex flex-col items-center">
        <div className="w-96 h-96 slef-center">
          <GageChart  fontSize={25} lineStyleWidth={30} lineColor="#FF8C00" />
        </div>
        <div className="flex w-[30rem] h-[15rem] justify-evenly ">
          <div className=" w-3/5 h-3/5">
            <GageChart name="" fontSize={25} lineStyleWidth={10} percentSize={20} lineColor="#8B0000"/>
            <p className={`text-center ${GeistSans.className}`}>Camping trip</p>
          </div>
          <div className="w-3/5 h-3/5">
            <GageChart name="" fontSize={25} lineStyleWidth={10} percentSize={20} lineColor="#FF8C00"/>
            <p className={`text-center ${GeistSans.className}`}>New computer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavingsGoals;
