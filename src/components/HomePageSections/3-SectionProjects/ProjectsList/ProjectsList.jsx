import PropTypes from "prop-types";
import { useState } from "react";
import { projects } from "../../../helpers/projects";
import PojectsItem from "../ProjectsItem/PojectsItem";
import { ProjectstList } from "./ProjectListStyled";

const ProjectsList = ({ lang }) => {
  console.log("render");
const [visibleProjects, setVisibleProjects] = useState(3)
const handleLoadMore = () => {
  setVisibleProjects(prevVisibleProjects => prevVisibleProjects + 3)
}

console.log('visibleProjects: ', visibleProjects);

  return (
    <>
      <ProjectstList>
        {projects.slice(0, visibleProjects).map((project) => {
          return <PojectsItem key={project.id} lang={lang} project={project} />;
        })}
      </ProjectstList>
      {visibleProjects < projects.length&&(<button type="button" onClick={handleLoadMore}>More projects</button>)}
    </>
  );
};
ProjectsList.propTypes = {
  lang: PropTypes.string,
};

export default ProjectsList;
