import AiChatBot from "@/components/AiChatBot";
import BotTitleAndDes from "@/components/BotTitleAndDes";

const SectionTwo = () => {
  return (
    <>
      <div className="flex justify-evenly gap-28 relative">
        <div className="w-11/12 z-0">
          <AiChatBot />
        </div>
        <div className="bg-offwhite w-9/12 absolute h-full -z-10 left-96 overflow-x-hidden rounded-r-2xl shadow-xl" />

        <BotTitleAndDes />
      </div>
    </>
  );
};

export default SectionTwo;
