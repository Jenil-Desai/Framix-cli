#!/usr/bin/env node

import { Command } from "commander";
import Create from "./commands/create";

const program = new Command();

program.name("Framix-cli").description("Framix is a universal project boilerplate generator for any framework or language, simplifying the setup of custom development environments.").version("1.0.0");

program
  .command("create")
  .description("Create An Project Boilerplate")
  .action(async () => {
    await Create();
  });

program.parse(process.argv);
