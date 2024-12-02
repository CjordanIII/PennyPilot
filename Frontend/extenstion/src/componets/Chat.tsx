import ChatContainer from "./chat/ChatContainer";


const Chat = () => {
  const iconSize: number = 200;
  const xSize: number = 40;
  return (
    <div className="my-5 ">
      <div className="flex justify-around">
        <img
          src="pennypilet.svg"
          width={iconSize}
          height={iconSize}
          alt="logo"
        />
        <button>
          <img src="close.svg" width={xSize} height={xSize} alt="x" />
        </button>
      </div>
      <hr className="my-5"/>
      <ChatContainer/>
    </div>
  );
};

export default Chat;
