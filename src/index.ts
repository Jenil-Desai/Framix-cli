import { Command } from "commander";
import create from "./commands/create";

const program = new Command();

program.name("Trogon-cli").description("Trogon is a universal project boilerplate generator for any framework or language, simplifying the setup of custom development environments.").version("1.0.0");

program
  .command("create")
  .description("Create An Project Boilerplate")
  .action(async () => {
    await create();
  });

program.parse(process.argv);
