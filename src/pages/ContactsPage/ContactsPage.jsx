import PropTypes from "prop-types";
import AddressImg from "../../components/AddressImg/AddressImg";
import AddressContacts from "../../components/AddressContacts/AddressContacts";
import { PageWrapper, SectionTitle } from "../../styles/CommonUsedTags";
import { AddressBox, ContactsWrapper } from "./ContactsPageStyled";

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
