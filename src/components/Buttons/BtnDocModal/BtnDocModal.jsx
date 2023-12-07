import PropTypes from "prop-types";
import { ButtonS, IconZoomDoc } from "./BtnDocModalStyled";

const BtnDocModal = ({ setIsOpen, setDocId, id }) => {
  const handleOnZoomClick = () => {
    setIsOpen(true);
    setDocId(id);
  };

  return (
    <ButtonS type="button" onClick={handleOnZoomClick}>
      <IconZoomDoc />
    </ButtonS>
  );
};

BtnDocModal.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  setDocId: PropTypes.func.isRequired,
};

export default BtnDocModal;
