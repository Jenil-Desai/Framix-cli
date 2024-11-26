import shellExec from "shell-exec";

export default {
  async setup(projectName: string) {
    await shellExec(`cd ${projectName} && npm i express`);
  },
};
