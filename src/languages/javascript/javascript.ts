import shellExec from "shell-exec";

export async function installJavascript(name: string) {
  await shellExec(`cd ${name} && npm init -y`);
}
