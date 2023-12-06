import PropTypes from "prop-types";
import { skills } from "../../helpers/skills";
import {
  SectionBox,
  SectionS,
  SectionTitle,
} from "../../../styles/CommonUsedTags";
import SkillImage from "../../../images/skills/skills-svg.svg";
import { ImgThumbSkills, SkillsBox, SkillsList } from "./SectionSkillsStyled";

const SectionSkills = ({ lang, isTablet }) => {
  return (
    <SectionS className="skills">
      <SectionTitle>
        {lang === "eng" && "Skills"}
        {lang === "sk" && "Skily"}
        {lang === "ua" && "Скіли"}
      </SectionTitle>
      {isTablet ? (
        <>
          <SectionBox className="skillsbox">
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
        </>
      ) : (
        <>
          <SectionBox>
            <ImgThumbSkills>
              <img src={SkillImage} alt="skills image" />
            </ImgThumbSkills>
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
                      </div>
                      <p>{skill.name}</p>
                    </li>
                  );
                })}
              </SkillsList>
            </SkillsBox>
          </SectionBox>
        </>
      )}
    </SectionS>
  );
};

SectionSkills.propTypes = {
  lang: PropTypes.string.isRequired,
  isTablet: PropTypes.bool.isRequired,
};
export default SectionSkills;
