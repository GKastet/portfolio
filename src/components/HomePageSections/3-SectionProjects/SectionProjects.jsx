import PropTypes from "prop-types";
import { SectionS, SectionTitle } from "../../../styles/CommonUsedTags"
import { ProjectItem } from "./SectionProjectsStyled";


const SectionProjects = ({lang}) => {
  return (
    <SectionS id="projects" className="projects">
      <SectionTitle>
        {lang === "eng" && "Projects"}
        {lang === "sk" && "Projecty"}
        {lang === "ua" && "Проекти"}
      </SectionTitle>
      <ul>
        <ProjectItem>

        </ProjectItem>

      </ul>
    </SectionS>
  )
}

SectionProjects.propTypes = {
  lang: PropTypes.string,
};
export default SectionProjects