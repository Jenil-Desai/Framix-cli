import inquirer from "inquirer";
import { config } from "../../config";

export async function GetLanguage(): Promise<string> {
  const languagesConfig = config;
  const languages = Object.keys(languagesConfig);
  const { language } = await inquirer.prompt([
    {
      type: "list",
      name: "language",
      message: "Which programming language do you want to use?",
      choices: languages,
    },
  ]);
  return language;
}
