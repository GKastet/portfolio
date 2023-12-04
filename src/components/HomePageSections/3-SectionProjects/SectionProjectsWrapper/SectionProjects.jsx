import PropTypes from "prop-types";
import { SectionS, SectionTitle } from "../../../../styles/CommonUsedTags"
import ProjectsList from "../ProjectsList/ProjectsList";

const SectionProjects = ({lang}) => {
  return (
    <SectionS id="projects" className="projects">
      <SectionTitle>
        {lang === "eng" && "Projects"}
        {lang === "sk" && "Projecty"}
        {lang === "ua" && "Проекти"}
      </SectionTitle>
      <ProjectsList lang={lang}/>      
    </SectionS>
  )
}

SectionProjects.propTypes = {
  lang: PropTypes.string,
};
export default SectionProjects