import shellExec from "shell-exec";
import fs from "fs/promises";

import logger from "../utils/logger";

export async function makeGitRepo(name: string) {
  const res = await shellExec(`cd ${name} && git init && touch .gitignore`);
  if (res.error) {
    logger.error(`[Error] : Git Is Not Installed`);
  } else {
    try {
      await fs.writeFile(`./${name}/.gitignore`, "node_modules");
    } catch (error) {
      logger.error(`[Error] : Error Creating .gitignore : ${error}`);
    }
  }
}
