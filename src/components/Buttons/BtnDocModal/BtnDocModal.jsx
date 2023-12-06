import PropTypes from "prop-types";
import { ButtonS, IconZoomDoc } from "./BtnDocModalStyled";

const BtnDocModal = ({ setIsOpen }) => {
  const handleOnZoomClick = () => {
    setIsOpen(true);
  };

  return (
    <ButtonS type="button" onClick={handleOnZoomClick}>
      <IconZoomDoc />
    </ButtonS>
  );
};

BtnDocModal.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
};

export default BtnDocModal;
