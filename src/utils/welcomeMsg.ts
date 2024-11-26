import figlet from "figlet";

import logger from "./logger";

export default async function welcomeMsg() {
  await figlet("Framix CLI", (err, data) => {
    if (err) {
      logger.error(err.message);
      return;
    }
    logger.brand(data || "");
  });
}
