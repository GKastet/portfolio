import { contacts } from "../../components/helpers/contacts";
import { Link } from "react-router-dom";
const ContactsPage = () => {
  console.log(contacts);
  const { email, phone } = contacts;
  return (
    <>
      <div>ContactsPage</div>
      <a
        href={`mailto:${email.email}`}
        type="email"
        target="_blank"
        rel="noreferrer noopener"
      >
        {email.text}
      </a>
      <a href={`tel:${phone.number}`} type="phone" target="_blank"
        rel="noreferrer noopener">
        {phone.text}
      </a>
      <Link to="/">home</Link>
    </>
  );
};

export default ContactsPage;
