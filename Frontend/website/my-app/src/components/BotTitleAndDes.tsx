import { GeistSans } from "geist/font/sans";

const BotTitleAndDes = () => {
  return (
    <div className={` ${GeistSans.className} flex flex-col text-center items-center justify-center w-5/12  px-10 py-16 `}>
      <h1 className="text-4xl mb-5">Chat with PennyPiolot</h1>
      <p className="text-xl w-10/12">Update your goals, transactions, and more simply by letting PennyPilot know</p>
    </div>
  );
};

export default BotTitleAndDes;
