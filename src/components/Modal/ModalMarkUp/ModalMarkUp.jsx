import PropTypes from "prop-types";
import { ImgThumb, ModalContainer } from "./ModalMarkUpStyled";
import BtnCloseModal from "../../Buttons/BtnCloseModal/BtnCloseModal";

const ModalMarkUp = ({ docItem, handleClickBtnClose }) => {
  console.log("docItem: ", docItem);
  const { docTitle, docImg } = docItem;
  return (
    <div>
      <BtnCloseModal handleClickBtnClose={handleClickBtnClose} />
      <ImgThumb>
        <img src={docImg} alt={docTitle.eng} />
      </ImgThumb>
    </div>
  );
};

ModalMarkUp.propTypes = {
  docItem: PropTypes.object.isRequired,
  handleClickBtnClose: PropTypes.func.isRequired,
};

export default ModalMarkUp;
