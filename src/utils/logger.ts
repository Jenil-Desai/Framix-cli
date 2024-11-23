import pc from "picocolors";

const logger = {
  log: (message: string) => console.log(pc.blue(message)),
  success: (message: string) => console.log(pc.green(message)),
  error: (message: string) => console.log(pc.red(message)),
  brand: (message: string) => console.log(pc.cyan(message)),
  info: (message: string) => console.log(pc.whiteBright(message)),
};

export default logger;
