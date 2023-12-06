import PropTypes from "prop-types";
import {
  SectionS,
  SectionTitle,
  SectionBox,
} from "../../../styles/CommonUsedTags";

import DocsList from "./DocsList/DocsList";

const SectionDocs = ({ lang }) => {
  return (
    <SectionS className="docs">
      <SectionTitle>
        {lang === "eng" && "Documents"}
        {lang === "sk" && "Doklady"}
        {lang === "ua" && "Документи"}
      </SectionTitle>
      <SectionBox className="docsbox">
        <DocsList lang={lang} />
      </SectionBox>
    </SectionS>
  );
};

SectionDocs.propTypes = {
  lang: PropTypes.string,
};

export default SectionDocs;
