import PropTypes from "prop-types";
import { skills } from "../../helpers/skills";
import { SectionS, SectionTitle } from "../../../styles/CommonUsedTags";
import SkillImage from "../../../images/skills/skills-svg.svg";
import {
  ImgThumbSkills,
  SectionBox,  
  SkillsBox,
  SkillsList,
} from "./SectionSkillsStyled";

const SectionSkills = ({ lang }) => {
  return (
    <SectionS className="skills" id="skills">
      <SectionTitle>
        {lang === "eng" && "Skills"}
        {lang === "sk" && "Skily"}
        {lang === "ua" && "Скіли"}
      </SectionTitle>
      <SectionBox>
        <SkillsBox>
          <p>
            {lang === "eng" &&
              "I have an experience in the following web technologies:"}
            {lang === "sk" &&
              "Mám skúsenosti s nasledujúcimi webovými technológiami:"}
            {lang === "ua" && "У мене досвід у наступних веб технологіях:"}
          </p>
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
          <img src={SkillImage} alt="skills image" />
        </ImgThumbSkills>
      </SectionBox>
    </SectionS>
  );
};

SectionSkills.propTypes = {
  lang: PropTypes.string,
};
export default SectionSkills;
