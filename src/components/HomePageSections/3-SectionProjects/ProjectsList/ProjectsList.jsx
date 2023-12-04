import PropTypes from "prop-types";
import PojectsItem from "../ProjectsItem/PojectsItem";
import { projects } from "../../../helpers/projects";
import { ProjectstList } from "./ProjectListStyled";

const ProjectsList = ({ lang }) => {
  return (
    <ProjectstList>
      {projects.map((project) => {
        return <PojectsItem key={project.id} lang={lang} project={project}/>;
      })}
    </ProjectstList>
  );
};
ProjectsList.propTypes = {
  lang: PropTypes.string,
};

export default ProjectsList;
