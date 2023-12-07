import cvImg from "../../images/docsfoto/cvW.webp";
import cvPDF from "./docs/Konstantin Goncharenko_CV.pdf";
import FSCertificateImg from '../../images/docsfoto/FSCertificateW.webp'
import FSCertificatePDF from './docs/Full-Stack certificate.pdf'
import FScourseImg1 from '../../images/docsfoto/FScourse1W.webp'
import FScourseImg2 from '../../images/docsfoto/FScourse2W.webp'
import FScourseImg3 from '../../images/docsfoto/FScourse3W.webp'
import FScoursePDF from './docs/Full-Stack course.pdf'

export const docs = [
  {
    id: 1,
    docTitle: {
      eng: "Resume",
      sk: "Životopis",
      ua: "Резюме",
    },
    docImg: cvImg,
    path: cvPDF,
  },
  {
    id: 2,
    docTitle: {
      eng: "Full-stack certificate",
      sk: "Full-stack certifikát",
      ua: "Full-stack сертифікат",
    },
    docImg: FSCertificateImg,
    path: FSCertificatePDF,
  },
  {
    id: 3,
    docTitle: {
      eng: "Full-stack course",
      sk: "Full-stack kurz",
      ua: "Full-stack курс",
    },
    docImg: FScourseImg1,
    docImgArr: [FScourseImg1, FScourseImg2, FScourseImg3],
    path: FScoursePDF,
  },
];
