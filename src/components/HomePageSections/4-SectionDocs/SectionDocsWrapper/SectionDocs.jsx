import PropTypes from "prop-types";
import DocsList from "../DocsList/DocsList";
import {
  SectionS,
  SectionTitle,
  SectionBox,
} from "../../../../styles/CommonUsedTags";
import { useState } from "react";
import Modal from "../../../Modal/ModalLogic/Modal";

const SectionDocs = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false)
  console.log('isOpen: ', isOpen);
  return (
    <SectionS className="docs">
      <SectionTitle>
        {lang === "eng" && "Documents"}
        {lang === "sk" && "Doklady"}
        {lang === "ua" && "Документи"}
      </SectionTitle>
      <SectionBox className="docsbox">
        <DocsList lang={lang} setIsOpen={setIsOpen}/>
      </SectionBox>
      {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen}/>}
    </SectionS>
  );
};

SectionDocs.propTypes = {
  lang: PropTypes.string,
};

export default SectionDocs;
