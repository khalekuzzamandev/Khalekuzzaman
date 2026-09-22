import {
  getBackenddSkill,
  getDatabaseSkill,
  getFrontendSkill,
  getToolSkill,
} from "@/lib/actions/skill";

import Skill from "./Home/Skill";

const FetchSkill = async () => {
  const [
    fontendSills,
    backendSkills,
    databaseSkills,
    tools,
  ] = await Promise.all([
    getFrontendSkill(),
    getBackenddSkill(),
    getDatabaseSkill(),
    getToolSkill(),
  ]);

  return (
    <Skill
      fontendSills={fontendSills}
      backendSkills={backendSkills}
      databaseSkills={databaseSkills}
      tools={tools}
    />
  );
};

export default FetchSkill;