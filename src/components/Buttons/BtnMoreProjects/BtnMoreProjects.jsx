import PropTypes from "prop-types";
import { BtnBox, BtnMoreStyled } from "./BtnMoreProjectsStyled";

const BtnMoreProjects = ({ lang, handleLoadMore }) => {
  return (
    <BtnBox>
      <BtnMoreStyled type="button" onClick={handleLoadMore}>
        {lang === "eng" && "More projects"}
        {lang === "sk" && "Viac projektov"}
        {lang === "ua" && "Більше проектів"}
      </BtnMoreStyled>
    </BtnBox>
  );
};

BtnMoreProjects.propTypes = {
  lang: PropTypes.string,
  handleLoadMore: PropTypes.func.isRequired,
};

export default BtnMoreProjects;
