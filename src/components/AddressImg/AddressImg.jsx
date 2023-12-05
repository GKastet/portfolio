import { ImgThumb } from "./AddressImgStyled";
import manContacts from '../../images/man-contacts.svg'

const AddressImg = () => {
  return (
    <ImgThumb>
      <img src={manContacts} alt="A man chating with contacts" />
    </ImgThumb>
  );
};

export default AddressImg;
