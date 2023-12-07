import PropTypes from "prop-types";
import { docs } from "../../../helpers/docs";
import DocsItem from "../DocsItem/DocsItem";
import { DocumentsList } from "./DocsListStyled";

const DocsList = ({ lang, setIsOpen, setDocId }) => {
  return (
    <DocumentsList>
      {docs.map(doc => {        
        return <DocsItem key={doc.path} lang={lang} doc={doc} setIsOpen={setIsOpen} setDocId={setDocId}/>;
      })}
    </DocumentsList>
  );
};

DocsList.propTypes = {
  lang: PropTypes.string.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  setDocId: PropTypes.func.isRequired,
};

export default DocsList;
