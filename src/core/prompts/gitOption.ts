import inquirer from "inquirer";

export async function GetGitOption(): Promise<string> {
  const { gitOption } = await inquirer.prompt([
    {
      type: "confirm",
      name: "gitOption",
      message: "Would You Like To Initally Git Repo Locally?",
    },
  ]);
  return gitOption;
}
