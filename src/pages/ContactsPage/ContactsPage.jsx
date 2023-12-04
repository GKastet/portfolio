import { contacts } from "../../components/helpers/contacts";
import { Link } from "react-router-dom";
import { PageWrapper, SectionTitle } from "../../styles/CommonUsedTags";
import { ContactItem, ContactsWrapper } from "./ContactsPageStyled";
import { CgMail } from "react-icons/cg";
import { MdPermPhoneMsg } from "react-icons/md";
import { FaLinkedin, FaTelegram, FaGithub } from "react-icons/fa";

const ContactsPage = () => {
  console.log(contacts);
  const { email, phone, telegram, linkedIn, gitHub } = contacts;
  return (
    <PageWrapper>
      <ContactsWrapper>
        <SectionTitle>My Contacts</SectionTitle>
        {/* <h2 style={{margin: "auto"}}>QQQQ</h2> */}
        <address>
          <ul>
            <ContactItem>
              <Link to={`mailto:${email.email}`}>
                <CgMail />
                <p>{email.text}</p>
              </Link>
            </ContactItem>
            <ContactItem>
              <Link
                to={`tel:${phone.number}`}
                type="phone"
                target="_blank"
                rel="noreferrer noopener"
              >
                <MdPermPhoneMsg />
                <p>{phone.text}</p>
              </Link>
            </ContactItem>
            <ContactItem>
              <Link
                to={`${telegram.telegram}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaTelegram />
                <p>{telegram.text}</p>
              </Link>
            </ContactItem>
            <ContactItem>
              <Link
                to={`${linkedIn.linkedInLink}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaLinkedin />
                <p>{linkedIn.text}</p>
              </Link>
            </ContactItem>
            <ContactItem>
              <Link
                to={`${gitHub.gitHubLink}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaGithub />
                <p>{gitHub.text}</p>
              </Link>
            </ContactItem>
          </ul>
        </address>
      </ContactsWrapper>
    </PageWrapper>
  );
};

export default ContactsPage;
