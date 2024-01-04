import PropTypes from "prop-types";
import {
  SectionBox,
  SectionS,
  SectionTitle,
} from "../../../../styles/CommonUsedTags";
import ProjectsList from "../ProjectsList/ProjectsList";

const SectionProjects = ({ lang }) => {  
  return (
    <SectionS className="projects">
      <SectionTitle>
        {lang === "eng" && "Projects"}
        {lang === "sk" && "Projecty"}
        {lang === "ua" && "Проекти"}
      </SectionTitle>
      <SectionBox className="projectsbox">
        <ProjectsList lang={lang} />
      </SectionBox>
      <div id="docs"/>
    </SectionS>
  );
};

SectionProjects.propTypes = {
  lang: PropTypes.string,  
};
export default SectionProjects;
