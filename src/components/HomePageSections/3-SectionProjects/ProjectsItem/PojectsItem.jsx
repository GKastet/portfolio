import PropTypes from "prop-types";
import {
  DescriptionBox,
  ImgThumb,
  LinksBox,
  ProjectItem,
} from "./ProjectsItemStyled";
import LinkVisitWeb from "../../../Buttons/LinkVisitWeb/LinkVisitWeb";
import LinkVisitGitHub from "../../../Buttons/LinkVisitGitHub/LinkVisitGitHub";

const PojectsItem = ({ lang, project }) => {
  const {
    name,
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
        <p>{name}</p>
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
