import inquirer from "inquirer";

export async function GetName(): Promise<string> {
  const { name } = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Project Name : ",
    },
  ]);
  return name;
}
