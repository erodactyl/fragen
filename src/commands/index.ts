import { Args, Command, ux } from "@oclif/core";
import chalk from "chalk";
import { readConfig } from "../config";
import load from "../load";
import { Conversation } from "../openai";

export default class Main extends Command {
  static strict = false;

  static description = "Ask a question to the AI right from your terminal";

  static flags = {};

  static args = {
    question: Args.string({
      name: "question",
      required: true,
      description: "The question to ask the AI",
    }),
  };

  async run(): Promise<void> {
    const config = readConfig(this.config.configDir);
    if (!config.apiKey) {
      throw new Error(
        `OpenAI API key not found. Please use \`${this.config.name} config\` to add a key`
      );
    }

    const conversation = new Conversation(config.apiKey);
    let isFirstQuestion = true;

    for (;;) {
      const question = await ux.prompt(isFirstQuestion ? "Ask" : "You");
      isFirstQuestion = false;

      const answer = await load(conversation.ask(question));

      ux.log(chalk.cyan(`\nAI: ${answer.trim()}\n`));
    }
  }
}
