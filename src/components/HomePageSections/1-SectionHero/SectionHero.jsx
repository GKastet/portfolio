import PropTypes from "prop-types";
import { introduction } from "../../helpers/heroTexts";
import { SectionBox, SectionS } from "../../../styles/CommonUsedTags";
import {
  FotoIntroduction,
  ImgThumb,
  PhotoSVG,
  TextIntroduction,
} from "./SectionHeroStyled";
import MyFoto from "../../../images/foto/foto-portfolioW.webp";
import ZigZag from "../../../images/foto/zigzags.svg";
import Plus from "../../../images/foto/plus.svg";
import Cube from "../../../images/foto/cube.svg";
import Ellipse from "../../../images/foto/ellipse.svg";
import Circles from "../../../images/foto/circles.svg";

const SectionHero = ({ lang, isTablet }) => {  
  const { title, myname, about } = introduction;
  return (
    <>
      <SectionS>
        {isTablet ? (
          <SectionBox>
            <TextIntroduction>
              <h1>
                {lang === "eng" && title.eng}
                {lang === "sk" && title.sk}
                {lang === "ua" && title.ua}
              </h1>
              <h3>
                {lang === "eng" && <span>{myname.eng}</span>}
                {lang === "sk" && <span>{myname.sk}</span>}
                {lang === "ua" && <span>{myname.ua}</span>}
                {lang === "eng" && about.eng}
                {lang === "sk" && about.sk}
                {lang === "ua" && about.ua}
              </h3>
              <a href="mailto:goncharenko.k.mail@gmail.com">
                {lang === "eng" && "Contact me"}
                {lang === "sk" && "Kontaktujte ma"}
                {lang === "ua" && "Зв'язатися зі мною"}
              </a>
            </TextIntroduction>
            <FotoIntroduction>
              <ImgThumb>
                <img src={MyFoto} alt="foto Goncharenko" />
              </ImgThumb>
              <PhotoSVG className="zigZag">
                <img src={ZigZag} alt="ZigZag" />
              </PhotoSVG>
              <PhotoSVG className="plus">
                <img src={Plus} alt="plus" />
              </PhotoSVG>
              <PhotoSVG className="cube">
                <img src={Cube} alt="cube" />
              </PhotoSVG>
              <PhotoSVG className="ellipse">
                <img src={Ellipse} alt="ellipse" />
              </PhotoSVG>
              <PhotoSVG className="circles">
                <img src={Circles} alt="circles" />
              </PhotoSVG>
            </FotoIntroduction>
          </SectionBox>
        ) : (
          <SectionBox>
            <FotoIntroduction>
              <ImgThumb>
                <img src={MyFoto} alt="foto Goncharenko" />
              </ImgThumb>
              <PhotoSVG className="zigZag">
                <img src={ZigZag} alt="ZigZag" />
              </PhotoSVG>
              <PhotoSVG className="plus">
                <img src={Plus} alt="plus" />
              </PhotoSVG>
              <PhotoSVG className="cube">
                <img src={Cube} alt="cube" />
              </PhotoSVG>
              <PhotoSVG className="ellipse">
                <img src={Ellipse} alt="ellipse" />
              </PhotoSVG>
              <PhotoSVG className="circles">
                <img src={Circles} alt="circles" />
              </PhotoSVG>
            </FotoIntroduction>
            <TextIntroduction>
              <h1>
                {lang === "eng" && title.eng}
                {lang === "sk" && title.sk}
                {lang === "ua" && title.ua}
              </h1>
              <h3>
                {lang === "eng" && <span>{myname.eng}</span>}
                {lang === "sk" && <span>{myname.sk}</span>}
                {lang === "ua" && <span>{myname.ua}</span>}
                {lang === "eng" && about.eng}
                {lang === "sk" && about.sk}
                {lang === "ua" && about.ua}
              </h3>
              <a href="mailto:goncharenko.k.mail@gmail.com">
                {lang === "eng" && "Contact me"}
                {lang === "sk" && "Kontaktujte ma"}
                {lang === "ua" && "Зв'язатися зі мною"}
              </a>
            </TextIntroduction>
          </SectionBox>
        )}
        <div id="skills" />
      </SectionS>
    </>
  );
};
SectionHero.propTypes = {
  lang: PropTypes.string.isRequired,
  isTablet: PropTypes.bool.isRequired,
};

export default SectionHero;
