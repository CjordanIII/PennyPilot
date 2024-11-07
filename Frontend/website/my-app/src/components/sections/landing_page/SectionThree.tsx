import LineChart from "@/components/charts/LineChart";
import GageChart from "@/components/charts/GageChart";
const SectionThree = () => {
  return (
    <div className="flex justify-around gap-20 mb-5">
      <div className="w-2/5 p-10  bg-offwhite rounded-3xl shadow-xl">
        <LineChart />
        <h1 className="font-bricolage text-4xl text-center py-10 ">
          Track your spending
        </h1>
      </div>
      <div className="w-2/5  bg-offwhite rounded-3xl shadow-xl">
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
