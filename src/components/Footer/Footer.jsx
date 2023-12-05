import PropTypes from "prop-types";
import { FaLinkedin, FaTelegram, FaGithub } from "react-icons/fa";
import { MdPermPhoneMsg } from "react-icons/md";
import { CgMail } from "react-icons/cg";
import { contacts } from "../../components/helpers/contacts";
import {
  BottomTextBox,
  FooterBox,
  FooterS,
  GitBox,
  GitLink,
  IconListUl,
  SocialBox,
  SocialLink,
} from "./FooterStyled";

const Footer = ({ lang }) => {
  const { phone, email, telegram, gitHub, linkedIn } = contacts;
  return (
    <FooterS>
      <FooterBox>
        <SocialBox>
          {lang === "eng" && <h3>My contact links:</h3>}
          {lang === "sk" && <h3>Moje kontaktné odkazy:</h3>}
          {lang === "ua" && <h3>Зв&apos;язатися зі мною:</h3>}

          <IconListUl>
            <li>
              <SocialLink
                to={`${linkedIn.linkedInLink}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaLinkedin />
              </SocialLink>
            </li>
            <SocialLink
              to={`tel:${phone.number}`}
              type="phone"
              target="_blank"
              rel="noreferrer noopener"
            >
              <MdPermPhoneMsg />
            </SocialLink>
            <SocialLink
              to={`${telegram.telegram}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaTelegram />
            </SocialLink>
            <SocialLink to={`mailto:${email.email}`}>
              <CgMail />
            </SocialLink>
          </IconListUl>
        </SocialBox>
        <GitBox>
          {lang === "eng" && <h3>More projects I’ve worked on</h3>}
          {lang === "sk" && <h3>Viac projektov na odkaze:</h3>}
          {lang === "ua" && <h3>Більше проектів за посиланням:</h3>}
          <GitLink
            to={`${gitHub.gitHubLink}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaGithub />
            {lang === "eng" && <p>@GKastet on GitHub</p>}
            {lang === "sk" && <p>@GKastet na GitHub</p>}
            {lang === "ua" && <p>@GKastet на GitHub</p>}
          </GitLink>
        </GitBox>
      </FooterBox>
      <BottomTextBox>
        {lang === "eng" && <p>&copy; All rights reserved, GK, 2023</p>}
        {lang === "sk" && <p>&copy; Všetky práva vyhradené, GK, 2023</p>}
        {lang === "ua" && <p>&copy; Усі права захищені, GK, 2023</p>}

        <p>
          {lang === "eng" && "Designed by"}
          {lang === "sk" && "Navrhol"}
          {lang === "ua" && "Дизайн створений"}

          <a
            href="mailto:pkmurungi.pm@gmail.com"
            type="email"
            target="_blank"
            rel="noreferrer noopener"
          >
            pkmurungi.pm
          </a>
        </p>
      </BottomTextBox>
    </FooterS>
  );
};

Footer.propTypes = {
  lang: PropTypes.string,
};
export default Footer;
//By Paminus Murungi
// https://www.figma.com/community/file/1124669212090570174/software-developer-portfolio
