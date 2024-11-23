import figlet from "figlet";
import clear from "clear";

import { MakeDirectory } from "../utils/makeDir";
import prompts from "../core/prompts/prompt";
import logger from "../utils/logger";
import { langMatcher } from "../utils/langMatcher";
import { frameworkMatcher } from "../utils/frameMatcher";
import { initGit } from "../functions/initGit";

export default async function create() {
  await clear();
  await figlet("Framix CLI", (err, data) => {
    if (err) {
      logger.error(err.message);
      return;
    }
    logger.brand(data || "");
  });

  const name = await prompts.name();
  const langauge = await prompts.language();
  const framework = await prompts.framework(langauge);
  const gitOption = await prompts.gitOptions();

  await MakeDirectory(name);
  await langMatcher(langauge, name);
  if (framework != "Simple") await frameworkMatcher(framework, name);
  if (gitOption) await initGit(name);

  await clear();
  await figlet("Success!", (err, data) => {
    if (err) {
      logger.error(err.message);
      return;
    }
    logger.success(data || "");
  });

  logger.info(`🎉 Your project ${name} has been created successfully!\n`);
  logger.success("Happy coding! 🎊\n");
}
