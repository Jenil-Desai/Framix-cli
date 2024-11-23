import { installExpress } from "../frameworks/express/express";
import logger from "./logger";

type FrameworkSetupFunction = (projectName: string) => Promise<void>;

const frameworkSetupMap: Record<string, FrameworkSetupFunction> = {
  Express: installExpress,
};

export async function frameworkMatcher(framework: string, projectName: string): Promise<void> {
  const setupFunction = frameworkSetupMap[framework];

  if (!setupFunction) {
    console.error(`Unsupported framework: ${framework}`);
    console.log("Available frameworks:", Object.keys(frameworkSetupMap).join(", "));
    return;
  }

  try {
    await setupFunction(projectName);
    logger.log(`[Done] : Installed Framework ${framework}`);
  } catch (error) {
    logger.error(`[Error] : Failed To Set Up Framework ${framework} : ${error}`);
  }
}
