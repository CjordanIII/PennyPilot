import { v4 as uuidv4 } from 'uuid';




const chatHistory = [];






const  addChatEntry= (userPrompt: string, aiResponse: any) =>{
  const chatEntry = {
    timestamp: new Date().toISOString(),
    uuid: uuidv4(),
    userPrompt: userPrompt,
    aiResponse: aiResponse,
  };
//   TODO add return?
  chatHistory.push(chatEntry);
}
