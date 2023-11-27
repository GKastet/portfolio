import { SectionS } from "../../../styles/CommonUsedTags";
import { FotoIntroduction, ImgThumb, PhotoSVG, TextIntroduction } from "./SectionHeroStyled";
import MyFoto from '../../../images/foto/foto-portfolioW.webp'
import ZigZag from '../../../images/foto/zigzags.svg'
import Plus from '../../../images/foto/plus.svg'
import Cube from '../../../images/foto/cube.svg'
import Ellipse from '../../../images/foto/ellipse.svg'
import Circles from '../../../images/foto/circles.svg'


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
    </SectionS>
  );
};

export default SectionHero;
