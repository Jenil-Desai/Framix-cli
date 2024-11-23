import shellExec from "shell-exec";

export async function installExpress(name: string) {
  await shellExec(`cd ${name} && npm i express`);
}
