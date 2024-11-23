import { installJavascript } from "../languages/javascript/javascript";
import logger from "./logger";

type EnvironmentCreator = (projectName: string) => Promise<void>;

const languageEnvironmentMap: Record<string, EnvironmentCreator> = {
  JavaScript: installJavascript,
};

export async function langMatcher(language: string, projectName: string): Promise<void> {
  const environmentCreator = languageEnvironmentMap[language];

  try {
    await environmentCreator(projectName);
    logger.log(`[Done] : Successfully Initialized ${language} Enviroment`);
  } catch (error) {
    logger.error(`[Error] : Failed To Create Environment ${language} : ${error}`);
  }
}
