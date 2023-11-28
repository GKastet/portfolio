import PropTypes from "prop-types";
import { docs } from "../../helpers/docs";
import { SectionS, SectionTitle } from "../../../styles/CommonUsedTags";
import {
  DocButtonsBox,
  DocItem,
  DocOptionsBox,
  DocsList,
  ImgThumb,  
} from "./SectionDocsStyled";
import BtnDocModal from "../../Buttons/BtnDocModal/BtnDocModal";
import BtnDocLoad from "../../Buttons/BtnDocLoad/BtnDocLoad";

const SectionDocs = ({ lang }) => {
  console.log(docs);
  return (
    <SectionS id="docs" className="docs">
      <SectionTitle>
        {lang === "eng" && "Documents"}
        {lang === "sk" && "Doklady"}
        {lang === "ua" && "Документи"}
      </SectionTitle>
      <DocsList>
        {docs.map((doc) => {
          const { docTitle, docImg, path } = doc;
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
                  <BtnDocModal />
                  <BtnDocLoad doc={doc} />
                </DocButtonsBox>
              </DocOptionsBox>
            </DocItem>
          );
        })}
      </DocsList>
    </SectionS>
  );
};

SectionDocs.propTypes = {
  lang: PropTypes.string,
};

export default SectionDocs;
