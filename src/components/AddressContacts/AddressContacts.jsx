import { Link } from "react-router-dom";
import { CgMail } from "react-icons/cg";
import { MdPermPhoneMsg } from "react-icons/md";
import { FaLinkedin, FaTelegram, FaGithub } from "react-icons/fa";
import { contacts } from "../../components/helpers/contacts";
import { ContactItem, ContactsList } from "./AddressContactsStyled";

const AddressContacts = () => {
  const { email, phone, telegram, linkedIn, gitHub } = contacts;
  return (
    <>
      <address>
        <ContactsList>
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
        </ContactsList>
      </address>
    </>
  );
};

export default AddressContacts;
