import PropTypes from "prop-types";
import {
  DescriptionBox,
  ImgThumb,
  LinksBox,
  ProjectItem,
  UsedSkillsList,
} from "./ProjectsItemStyled";
import LinkVisitWeb from "../../../Buttons/LinkVisitWeb/LinkVisitWeb";
import LinkVisitGitHub from "../../../Buttons/LinkVisitGitHub/LinkVisitGitHub";

const PojectsItem = ({ lang, project }) => {
  const {
    name,
    skills,    
    img,
    imgAlt,
    descriptionEng,
    descriptionSk,
    descriptionUa,
    roleEng,
    roleSk,
    roleUa,
    web,
    gitHub,
  } = project;
  
  return (
    <ProjectItem>
      <ImgThumb>
        <img src={img} alt={imgAlt} />
      </ImgThumb>
      <DescriptionBox>
        <p style={{fontWeight: "bold"}}>{name}</p>
        <UsedSkillsList>
          {skills.map(skill=> {
            return(
              <li key={skill.name}>
                <div>
                  <img src={skill.svg} alt={skill.name} />
                </div>
              </li>
            )
          })}
          <p>{lang === 'eng'&&'etc.'}
          {lang === 'sk'&&'atd.'}
          {lang === 'ua'&&'та ін.'}</p>

        </UsedSkillsList>
        <p>
          {lang === "eng" && descriptionEng}
          {lang === "sk" && descriptionSk}
          {lang === "ua" && descriptionUa}
        </p>
        <p>
          {lang === "eng" && roleEng}
          {lang === "sk" && roleSk}
          {lang === "ua" && roleUa}
        </p>
      </DescriptionBox>
      <LinksBox className="buttonsbox">
        <LinkVisitWeb web={web} />
        <LinkVisitGitHub gitHub={gitHub} />
      </LinksBox>
    </ProjectItem>
  );
};

PojectsItem.propTypes = {
  lang: PropTypes.string.isRequired,
  project: PropTypes.object.isRequired,
};

export default PojectsItem;
