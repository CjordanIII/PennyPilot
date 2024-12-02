import { v4 as uuidv4 } from 'uuid';
import Message from './messages.class';
class AI {
    private name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    public sendMessage(message: string): Message {
      const timestamp = new Date();
      const id = uuidv4();
      const content = `AI (${this.name}): I received your message "${message}" and here is my response.`;
      return new Message(id, timestamp, content);
    }
  }

  export default AI