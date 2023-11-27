import { SectionS } from "../../../styles/CommonUsedTags";
import { skills } from "../../helpers/skills";
import SkillImage from '../../../images/skills/skills-svg.svg'
import {
  ImgThumbSkills,
  SectionBox,
  SectionTitle,
  SkillsBox,
  SkillsList,
} from "./SectionSkillsStyled";

const SectionSkills = () => { 
  // console.log(skills.svg);
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
                    {/* {skill.svg} */}
                  </div>
                  <p>{skill.name}</p>
                </li>
              );
            })}            
          </SkillsList>
        </SkillsBox>
        <ImgThumbSkills>
          <img
            src={SkillImage}
            alt="skills image"
          />
        </ImgThumbSkills>
      </SectionBox>
    </SectionS>
  );
};

export default SectionSkills;
