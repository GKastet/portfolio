import PropTypes from "prop-types";
import { DescriptionBox, ImgThumb, LinksBox, ProjectItem } from "./ProjectsItemStyled"
import LinkVisitWeb from "../../../Buttons/LinkVisitWeb/LinkVisitWeb";
import LinkVisitGitHub from "../../../Buttons/LinkVisitGitHub/LinkVisitGitHub";


const PojectsItem = ({lang, project}) => {
    const {name, img, imgAlt, descriptionEng, roleEng, web, gitHub} = project
  return (
    <ProjectItem>
        <ImgThumb>
            <img src={img} alt={imgAlt}/>
        </ImgThumb>
        <DescriptionBox>
            <p>
                {descriptionEng}
            </p>
            <p>{roleEng}</p>
        </DescriptionBox>
        <LinksBox className="buttonsbox">
            <LinkVisitWeb web={web}/>            
            <LinkVisitGitHub gitHub={gitHub}/>
        </LinksBox>
        
        </ProjectItem>
  )
}

PojectsItem.propTypes = {
    lang: PropTypes.string,
    project: PropTypes.object.isRequired,
  };

export default PojectsItem