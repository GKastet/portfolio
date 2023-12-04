import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa";
import { LinkWeb } from "./LinkVisitGitHubStyled";

const LinkVisitGitHub = ({ gitHub }) => {
  return (
    <LinkWeb to={gitHub} target="_blank" rel="noreferrer noopener">
      <FaGithub />
    </LinkWeb>
  );
};
LinkVisitGitHub.propTypes = {
  gitHub: PropTypes.string.isRequired,
};

export default LinkVisitGitHub;
