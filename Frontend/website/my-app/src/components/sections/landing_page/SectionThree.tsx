import LineChart from "@/components/charts/LineChart";
import GageChart from "@/components/charts/GageChart";
const SectionThree = () => {
  return (
    <div className="flex justify-around  mb-5">
      <div className="w-6/12 p-10  bg-offwhite rounded-3xl shadow-sm">
        <LineChart />
        <h1 className="font-bricolage text-4xl text-center py-10 ">
          Track your spending
        </h1>
      </div>
      <div className="w-2/5  bg-offwhite rounded-3xl shadow-sm">
        <div className="h-96">
          <GageChart />
          <h1 className="font-bricolage text-4xl text-center py-8 ">
            Monitor your budget
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
