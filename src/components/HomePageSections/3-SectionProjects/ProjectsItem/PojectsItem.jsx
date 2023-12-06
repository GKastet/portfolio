import PropTypes from "prop-types";
import { DescriptionBox, ImgThumb, LinksBox, ProjectItem } from "./ProjectsItemStyled"
import LinkVisitWeb from "../../../Buttons/LinkVisitWeb/LinkVisitWeb";
import LinkVisitGitHub from "../../../Buttons/LinkVisitGitHub/LinkVisitGitHub";


const PojectsItem = ({lang, project}) => {
    //name
    const {img, imgAlt, descriptionEng, roleEng, web, gitHub} = project
  return (
    <ProjectItem>
        <ImgThumb>
            <img src={img} alt={imgAlt}/>
        </ImgThumb>
        <DescriptionBox>
            <p>
                {lang === 'eng'&&descriptionEng}
            </p>
            <p>{lang === 'eng'&&roleEng}</p>
        </DescriptionBox>
        <LinksBox className="buttonsbox">
            <LinkVisitWeb web={web}/>            
            <LinkVisitGitHub gitHub={gitHub}/>
        </LinksBox>
        
        </ProjectItem>
  )
}

PojectsItem.propTypes = {
    lang: PropTypes.string.isRequired,
    project: PropTypes.object.isRequired,
  };

export default PojectsItem