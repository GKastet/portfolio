import PropTypes from "prop-types";
import { useState } from "react";
import { projects } from "../../../helpers/projects";
import PojectsItem from "../ProjectsItem/PojectsItem";
import BtnMoreProjects from "../../../Buttons/BtnMoreProjects/BtnMoreProjects";
import { ProjectstList } from "./ProjectListStyled";

const ProjectsList = ({ lang }) => {  
  const [visibleProjects, setVisibleProjects] = useState(3);
  const handleLoadMore = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 3);
  };

  return (
    <>
      <ProjectstList>
        {projects.slice(0, visibleProjects).map((project) => {
          return <PojectsItem key={project.id} lang={lang} project={project} />;
        })}
      </ProjectstList>
      {visibleProjects < projects.length && (
        <BtnMoreProjects lang={lang} handleLoadMore={handleLoadMore} />
      )}
    </>
  );
};
ProjectsList.propTypes = {
  lang: PropTypes.string,
};

export default ProjectsList;
