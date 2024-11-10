import { BUILT_RESPONCES } from "@/constraints/ai_constraints";
// TODO add btn funcinality
const AiSuggestions = () => {
  return (
    <>
      {BUILT_RESPONCES.map((data, i) => {
        return <button key={i} className="bg-white py-3 px-4  rounded-full hover:bg-gray-300 transition duration-300
        active:bg-gray-400 active:text-gray-800 active:scale-small ease-in-out transform-gpu">{data}</button>;
      })}
    </>
  );
};

export default AiSuggestions;
