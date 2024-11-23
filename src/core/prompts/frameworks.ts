import inquirer from "inquirer";
import { config } from "../../config";

export async function GetFramwork(language: string): Promise<string> {
  const languageConfig = config[language];
  const frameworks = languageConfig.frameworks.map((framework) => framework.name);
  const { framework } = await inquirer.prompt([
    {
      type: "list",
      name: "framework",
      message: `Which framework do you want to use for ${language}?`,
      choices: frameworks,
    },
  ]);
  return framework;
}
