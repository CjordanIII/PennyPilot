import GageChart from "@/components/charts/GageChart";
import { GeistSans } from "geist/font/sans";

const SavingsGoals = () => {
  const percentSize:number = 15
  const lineWithSize:number = 12
  return (
    <section className="w-full h-full flex flex-col items-center">
      <h1 className="text-2xl pb-4 self-start">Savings Goals</h1>
      <div className="bg-white rounded-3xl shadow-sm flex flex-col items-center w-full h-full ">
        <div className="w-full h-full self-center">
          <GageChart fontSize={25} lineStyleWidth={20} lineColor="#FF8C00" />
        </div>
        <div className="flex w-full h-4/5 justify-evenly ">
          <div className="w-2/5 h-4/5">
            <GageChart name=""  lineStyleWidth={lineWithSize} percentSize={percentSize} lineColor="#8B0000" />
            <p className={`text-center ${GeistSans.className}`}>Camping trip</p>
          </div>
          <div className="w-2/5 h-4/5">
            <GageChart name=""  lineStyleWidth={lineWithSize} percentSize={percentSize} lineColor="#FF8C00" />
            <p className={`text-center ${GeistSans.className}`}>New computer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavingsGoals;
