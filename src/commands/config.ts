import { Command, ux } from "@oclif/core";
import { readConfig, writeConfig } from "../config";

export default class Config extends Command {
  static strict = false;

  static description = "Configure OpenAI API key.";

  static flags = {};

  static args = {};

  async run(): Promise<void> {
    const apiKey = await ux.prompt("Enter your OpenAI API Key", {
      type: "hide",
    });

    const config = readConfig(this.config.configDir);

    const configWithKey = { ...config, apiKey };

    writeConfig(this.config.configDir, configWithKey);
  }
}
