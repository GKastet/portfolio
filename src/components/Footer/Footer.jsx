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

const Footer = () => {
  const { phone, email, telegram, gitHub, linkedIn } = contacts;
  return (
    <FooterS>
      <FooterBox>
        <SocialBox>
          <h3>My contact links:</h3>
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
          <h3>More projects I’ve worked on</h3>
          <GitLink
            to={`${gitHub.gitHubLink}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaGithub />
            <p>@GKastet on GitHub</p>
          </GitLink>
        </GitBox>
      </FooterBox>
      <BottomTextBox>
        <p>&copy; All rights reserved, KG, 2023</p>
        <p>
          Designed by
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

export default Footer;
//By Paminus Murungi
// https://www.figma.com/community/file/1124669212090570174/software-developer-portfolio
