import SavingsGoals from "@/components/sections/overview_page/SavingsGoals";
import BugetGraph from "@/components/budget/BugetGraph";

const page = () => {
  return (
    <div className="w-full h-screen flex justify-evenly items-center">
      <div className="w-full h-4/5 flex justify-evenly items-center">
        <div className="w-5/12 h-4/5">
          <BugetGraph />
        </div>
        <div className="w-5/12 h-4/5">
          <SavingsGoals />
        </div>
      </div>
    </div>
  );
};

export default page;
