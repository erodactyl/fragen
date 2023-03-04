import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";

export class Conversation {
  private openai: OpenAIApi;
  private messages: ChatCompletionRequestMessage[] = [];

  constructor(apiKey: string) {
    const configuration = new Configuration({
      apiKey: apiKey,
    });
    this.openai = new OpenAIApi(configuration);
  }

  ask = async (question: string) => {
    this.messages.push({
      content: question,
      role: "user",
    });

    const completion = await this.openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: this.messages,
    });

    const message = completion.data.choices[0].message;
    if (!message) {
      throw new Error("No content returned from OpenAI");
    }

    this.messages.push(message);

    return message.content;
  };
}
