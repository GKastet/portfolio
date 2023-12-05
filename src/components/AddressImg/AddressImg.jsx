import manContacts from "../../images/man-contacts.svg";
import { ImgThumb } from "./AddressImgStyled";

const AddressImg = () => {
  return (
    <ImgThumb>
      <img src={manContacts} alt="A man chating with contacts" />
    </ImgThumb>
  );
};

export default AddressImg;
