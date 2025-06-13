export type Message = {
  text: string;
  user: string;
  added: Date;
};

export class Messages {
  private static instance: Messages;
  private messages: Message[];

  private constructor() {
    this.messages = [
      {
        text: "Hi there!",
        user: "Amando",
        added: new Date(),
      },
      {
        text: "Hello World!",
        user: "Charles",
        added: new Date(),
      },
    ];
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

  public addMessage(message: Message): void {
    this.messages.push(message);
  }
}
