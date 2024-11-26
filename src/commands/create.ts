import clear from "clear";

import welcomeMsg from "../utils/welcomeMsg";
import successMsg from "../utils/successMsg";
import { setupProject } from "../core/setup";
import wizard from "../core/wizard";
import failureMsg from "../utils/FailureMsg";

export default async function Create() {
  await clear();
  await welcomeMsg();

  const { projectName, language, framework, styling, gitOption } = await wizard();
  const status = await setupProject(projectName, language, framework, styling, gitOption);
  if (status) {
    await successMsg(projectName);
  } else {
    await failureMsg(projectName);
  }
}
