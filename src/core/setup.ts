import logger from "../utils/logger";
import { makeDirectory } from "../utils/makeDir";
import { makeGitRepo } from "../utils/makeGitRepo";
import { loadPlugin } from "./utils";

export async function setupProject(projectName: string, language: string, framework: string, styling: string | undefined, gitOption: boolean) {
  try {
    await makeDirectory(projectName);

    logger.log("[info] : 🔄 Setting up your development environment...");
    const languagePlugin = await loadPlugin("languages", language);
    await languagePlugin.setup(projectName);

    logger.log("[info] : ⚙️ Installing dependencies for TypeScript + Express...");
    const frameworkPlugin = await loadPlugin("frameworks", framework);
    await frameworkPlugin.setup(projectName);

    if (styling) {
      logger.log("[info] : ⏳ Fetching templates for React + Tailwind CSS...");
      const stylingPlugin = await loadPlugin("styling", styling);
      await stylingPlugin.setup(projectName);
    }

    logger.log("[info] : 🔧 Initializing a local Git repository...");
    if (gitOption) await makeGitRepo(projectName);

    return true;
  } catch (error) {
    return false;
  }
}
