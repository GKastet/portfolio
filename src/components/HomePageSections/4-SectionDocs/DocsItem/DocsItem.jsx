import PropTypes from "prop-types";
import { DocButtonsBox, DocItem, DocOptionsBox, ImgThumb } from "./DocsItemStyled";
import BtnDocModal from "../../../Buttons/BtnDocModal/BtnDocModal";
import BtnDocLoad from "../../../Buttons/BtnDocLoad/BtnDocLoad";

const DocsItem = ({ lang, doc, setIsOpen, setDocId }) => {
  const { id, docTitle, docImg, path } = doc;
  return (
    <DocItem key={path}>
      <ImgThumb>
        <img src={docImg} alt={docTitle.eng} />
      </ImgThumb>
      <DocOptionsBox>
        {lang === "eng" && <p>{docTitle.eng}</p>}
        {lang === "sk" && <p>{docTitle.sk}</p>}
        {lang === "ua" && <p>{docTitle.ua}</p>}
        <DocButtonsBox>
          <BtnDocModal setIsOpen={setIsOpen} setDocId={setDocId} id={id}/>
          <BtnDocLoad doc={doc} />
        </DocButtonsBox>
      </DocOptionsBox>
    </DocItem>
  );
};

DocsItem.propTypes = {
  lang: PropTypes.string.isRequired,
  doc: PropTypes.object.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  setDocId: PropTypes.func.isRequired,
};

export default DocsItem;
