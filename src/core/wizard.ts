import { frameworks, frontendFrameworks, languages, stylings } from "../config/avaliableOptions";
import inquirer from "inquirer";

export interface WizardOptions {
  projectName: string;
  language: string;
  framework: string;
  styling?: string;
  gitOption: boolean;
}

export default async function wizard(): Promise<WizardOptions> {
  const { projectName } = await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "What would you like to name your project ?",
      default: "my-project",
      validate: (input: string) => {
        if (!/^[a-zA-Z][a-zA-Z0-9-_]{2,49}$/.test(input)) {
          return "Project name must start with a letter and can only contain letters, numbers, dashes (-), or underscores (_). Length: 3-50 characters.";
        }
        return true;
      },
    },
  ]);

  let { language } = await inquirer.prompt([
    {
      type: "list",
      name: "language",
      message: "Which programming language are you using for this project ?",
      choices: languages,
    },
  ]);
  language = String(language);

  const { framework } = await inquirer.prompt([
    {
      type: "list",
      name: "framework",
      message: "Which framework would you like to use ?",
      choices: frameworks[language],
    },
  ]);

  let styling;
  if (frontendFrameworks.includes(framework)) {
    const stylingResponse = await inquirer.prompt([
      {
        type: "list",
        name: "styling",
        message: "Would you like to add a styling framework to your project ?",
        choices: stylings,
      },
    ]);
    styling = stylingResponse.styling;
  }

  const { gitOption } = await inquirer.prompt([
    {
      type: "confirm",
      name: "gitOption",
      message: "Would you like to initialize a Git repository for version control ?",
    },
  ]);

  return { projectName, language, framework, styling, gitOption };
}
