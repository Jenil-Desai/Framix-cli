import figlet from "figlet";

import logger from "./logger";

export default async function failureMsg(name: string) {
  await figlet("Failure!", (err, data) => {
    if (err) {
      logger.error(err.message);
      return;
    }
    logger.error(data || "");
  });
}
