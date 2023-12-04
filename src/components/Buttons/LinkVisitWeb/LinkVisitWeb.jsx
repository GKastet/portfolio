import PropTypes from "prop-types";
import { LinkWeb } from "./LinkVisitWebStyled";
import { FaInternetExplorer } from "react-icons/fa";

const LinkVisitWeb = ({ web }) => {
  console.log("web: ", web);
  return (
    <LinkWeb to={web} target="_blank" rel="noreferrer noopener">
      <FaInternetExplorer />
    </LinkWeb>
  );
};
LinkVisitWeb.propTypes = {
  web: PropTypes.string.isRequired,
};

export default LinkVisitWeb;
