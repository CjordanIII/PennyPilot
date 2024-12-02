
import { v4 as uuidv4 } from 'uuid';
import Message from './messages.class';
class Human {
    private name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    public sendMessage(message: string): Message {
      const timestamp = new Date();
      const id = uuidv4();
      const content = `Human (${this.name}): ${message}`;
      return new Message(id, timestamp, content);
    }
  }
  export default Human