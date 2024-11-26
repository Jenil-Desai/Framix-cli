import figlet from "figlet";

import logger from "./logger";
import picocolors from "picocolors";

export default async function successMsg(projectName: string) {
  await figlet("Success!", (err, data) => {
    if (err) {
      logger.error(err.message);
      return;
    }
    logger.success(data || "");
  });

  console.log(`
    ${picocolors.green("🎉 Hooray!")} ${picocolors.bold("Your project has been set up successfully.")}
    You can find your project in the folder: ${picocolors.cyan(`./${projectName}`)}
    
    ${picocolors.bold("What's next?")}
    ${picocolors.yellow("- Start coding:")} ${picocolors.white("Open the project in your favorite editor.")}
    ${picocolors.yellow("- Version control:")} ${picocolors.white("Push the project to a GitHub repository.")}
    
    ${picocolors.green("Happy coding! 🚀")}
      `);
}
