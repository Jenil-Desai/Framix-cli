import * as path from "path";
import logger from "../utils/logger";

export async function loadPlugin(pluginType: string, name: string) {
  try {
    const pluginPath = path.join(__dirname, "..", "plugins", pluginType, `${name.toLowerCase()}.ts`);
    const plugin = require(pluginPath);
    return plugin.default;
  } catch (error) {
    logger.error(`[Error] : Loading Plugin For ${pluginType} - ${name} : ${error}`);
    throw new Error();
  }
}
