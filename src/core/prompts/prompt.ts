import { GetFramwork } from "./frameworks";
import { GetGitOption } from "./gitOption";
import { GetLanguage } from "./langauges";
import { GetName } from "./name";

const prompts = {
  name: GetName,
  language: GetLanguage,
  framework: GetFramwork,
  gitOptions: GetGitOption,
};

export default prompts;
