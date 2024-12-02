import AI from "../../class/ai.class";
import Human from "../../class/human.class";
import Chat from "../../class/chat.class";
import Input from "./Input";

const ChatContainer = () => {
  const ai = new AI("Copilot");
const human = new Human("John");
const chat = new Chat(ai, human);

chat.startConversation();

  // TODO add chat between bot and human here 
  return (
    <div className="">
      <Input/>
    </div>
  )
}

export default ChatContainer