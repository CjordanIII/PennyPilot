import SavingsGoals from "@/components/sections/overview_page/SavingsGoals";
import BugetGraph from "@/components/budget/BugetGraph";
import MoneyStatusBlock from "@/components/sections/overview_page/MoneyStatus"
const page = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center">
      <div className="w-full">
        
        <MoneyStatusBlock/>
      </div>
      <div className="w-full h-8/12 flex justify-evenly items-center">
      
        <div className="w-5/12 h-full">
          <BugetGraph />
        </div>
        <div className="w-5/12 h-full">
          <SavingsGoals />
        </div>
      </div>
    </div>
  );
};

export default page;
