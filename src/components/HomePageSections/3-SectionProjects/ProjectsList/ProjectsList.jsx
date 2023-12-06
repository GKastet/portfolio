import PropTypes from "prop-types";
import { projects } from "../../../helpers/projects";
import PojectsItem from "../ProjectsItem/PojectsItem";
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
