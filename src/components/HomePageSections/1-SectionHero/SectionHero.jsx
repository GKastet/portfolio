import { SectionS } from "../../../styles/CommonUsedTags";
import { FotoIntroduction, ImgThumb, PhotoSVG, TextIntroduction } from "./SectionHeroStyled";


const SectionHero = () => {
  return (
    <SectionS>
      <TextIntroduction>
        <h1>Hi👋, I’m a full-stack developer</h1>
        <h3>
          I’m Konstantin Goncharenko, a developer dedicated to making the world a better place
          one line of code at a time.
        </h3>
        {/* <button></button> */}
        <a href="mailto:goncharenko.k.mail@gmail.com">Contact me</a>
      </TextIntroduction>
      <FotoIntroduction>
        <ImgThumb>
            <img src="../../../../imgs/foto-portfolioW.webp" alt="" />
        </ImgThumb>
        <PhotoSVG className="zigZag">
            <img src="../../../../imgs/zigzags.svg" alt="ZigZag" />
        </PhotoSVG>
        <PhotoSVG className="plus">
            <img src="../../../../imgs/plus.svg" alt="plus" />
        </PhotoSVG>
        <PhotoSVG className="cube">
            <img src="../../../../imgs/cube.svg" alt="cube" />
        </PhotoSVG>
        <PhotoSVG className="ellipse">
            <img src="../../../../imgs/Ellipse 11.svg" alt="ellipse" />
        </PhotoSVG>
        <PhotoSVG className="circles">
            <img src="../../../../imgs/circles.svg" alt="circles" />
        </PhotoSVG>
      </FotoIntroduction>
    </SectionS>
  );
};

export default SectionHero;
