import SavingsGoals from "@/components/sections/overview_page/SavingsGoals";
import BugetGraph from "@/components/budget/BugetGraph";

const page = () => {
  return (
    <div >
      <div className="w-auto h-auto flex justify-evenly">
        <BugetGraph />
        <SavingsGoals />
      </div>
    </div>
  );
};

export default page;
