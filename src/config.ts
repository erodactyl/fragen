import fs from "fs";
import path from "path";

interface Config {
  apiKey: string;
}

const createIfNotExists = (configDir: string) => {
  if (!fs.existsSync(configDir)) {
    fs.mkdirSync(configDir);
  }
};

export const readConfig = (dir: string): Partial<Config> => {
  try {
    createIfNotExists(dir);
    const configPath = path.join(dir, "config.json");
    const existigConfig = fs.readFileSync(configPath, "utf8");
    return JSON.parse(existigConfig);
  } catch (e) {
    return {};
  }
};

export const writeConfig = (dir: string, config: Config) => {
  try {
    createIfNotExists(dir);
    const configPath = path.join(dir, "config.json");
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
    return true;
  } catch (e) {
    return false;
  }
};
