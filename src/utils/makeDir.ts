import { mkdir } from "node:fs/promises";
import { join } from "node:path";
import logger from "./logger";

export async function makeDirectory(name: string) {
  try {
    logger.log("[info] : 📁 Creating project structure...");
    const projectFolder = join(process.cwd(), name);
    await mkdir(projectFolder, { recursive: true });
  } catch (err) {
    logger.error(`[Error] : Error Creating Directory : ${err}`);
  }
}
