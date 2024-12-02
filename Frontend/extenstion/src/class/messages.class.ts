 class Message {
    public id: string;
    public timestamp: Date;
    public content: string;
  
    constructor(id: string, timestamp: Date, content: string) {
      this.id = id;
      this.timestamp = timestamp;
      this.content = content;
    }
  
    public toString(): string {
      return `${this.timestamp.toISOString()} [${this.id}]: ${this.content}`;
    }
  }

  export default Message