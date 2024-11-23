import { mkdir } from "node:fs/promises";
import { join } from "node:path";
import logger from "./logger";

export async function MakeDirectory(name: string) {
  try {
    const projectFolder = join(process.cwd(), name);
    await mkdir(projectFolder, { recursive: true });

    logger.log(`[Done] : Directory Created : ${projectFolder}`);
  } catch (err) {
    logger.error(`[Error] : Error Creating Directory : ${err}`);
  }
}
