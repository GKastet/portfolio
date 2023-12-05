import PropTypes from "prop-types";
import { PageWrapper, SectionTitle } from "../../styles/CommonUsedTags";
import { AddressBox, ContactsWrapper } from "./ContactsPageStyled";

import AddressContacts from "../../components/AddressContacts/AddressContacts";
import AddressImg from "../../components/AddressImg/AddressImg";

const ContactsPage = ({ lang }) => {
  return (
    <PageWrapper>
      <ContactsWrapper>
        <SectionTitle>
          {lang === "eng" && "My Contacts"}
          {lang === "sk" && "Moje kontakty"}
          {lang === "ua" && "Мої контакти"}
        </SectionTitle>
        <AddressBox>
          <AddressImg />
          <AddressContacts />
        </AddressBox>
      </ContactsWrapper>
    </PageWrapper>
  );
};

ContactsPage.propTypes = {
  lang: PropTypes.string,
};

export default ContactsPage;
