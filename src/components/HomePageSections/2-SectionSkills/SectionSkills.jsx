import { SectionS } from "../../../styles/CommonUsedTags";
import { skills } from "../../helpers/skills";
import {
  ImgThumbSkills,
  SectionBox,
  SectionTitle,
  SkillsBox,
  SkillsList,
} from "./SectionSkillsStyled";

const SectionSkills = () => { 
  
  return (
    <SectionS className="skills"  id="skills">
      <SectionTitle>Skills</SectionTitle>
      <SectionBox>
        <SkillsBox>
          <p>I have an experience in the following web technologies:</p>
          <SkillsList>
            {skills.map((skill) => {
              return (
                <li key={skill.name}>
                  <div>
                    <img src={skill.svg}></img>
                  </div>
                  <p>{skill.name}</p>
                </li>
              );
            })}            
          </SkillsList>
        </SkillsBox>
        <ImgThumbSkills>
          <img
            src="../../../../imgs/skills/skills-svg.svg"
            alt="skills image"
          />
        </ImgThumbSkills>
      </SectionBox>
    </SectionS>
  );
};

export default SectionSkills;
