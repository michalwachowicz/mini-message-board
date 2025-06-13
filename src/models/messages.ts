import formatDate from "../utils/date-formatter";

export type Message = {
  text: string;
  user: string;
  addedDate: string;
};

export class Messages {
  private static instance: Messages;
  private messages: Message[];

  private constructor() {
    this.messages = [];

    this.addMessage("Hi there!", "Amando");
    this.addMessage("Hello World!", "Charles");
  }

  public static getInstance(): Messages {
    if (!this.instance) {
      this.instance = new Messages();
    }

    return this.instance;
  }

  public getMessages(): Message[] {
    return this.messages;
  }

  public addMessage(text: string, user: string): void {
    const now = new Date();
    const message: Message = { text, user, addedDate: formatDate(now) };

    this.messages.push(message);
  }
}
