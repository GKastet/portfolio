import PropTypes from "prop-types";
import { docs } from "../../../helpers/docs";
import DocsItem from "../DocsItem/DocsItem";
import { DocumentsList } from "./DocsListStyled";

const DocsList = ({ lang }) => {
  return (
    <DocumentsList>
      {docs.map(doc => {        
        return <DocsItem key={doc.path} lang={lang} doc={doc}/>;
      })}
    </DocumentsList>
  );
};

DocsList.propTypes = {
  lang: PropTypes.string,
};

export default DocsList;
