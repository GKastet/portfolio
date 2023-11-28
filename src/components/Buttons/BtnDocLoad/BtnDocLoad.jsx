import PropTypes from "prop-types";
import { IconLoadDoc } from "./BtnDocLoadStyled";

const BtnDocLoad = ({ doc }) => {
  const { path, docTitle } = doc;
  return (
    <a href={path} download={docTitle.eng}>
      <IconLoadDoc />
    </a>
  );
};

BtnDocLoad.propTypes = {
  doc: PropTypes.object,
};

export default BtnDocLoad;
