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
      eng: "Full-stack course_1",
      sk: "Full-stack kurz_1",
      ua: "Full-stack курс_1",
    },
    docImg: FScourseImg1,
    docImgArr: [FScourseImg1, FScourseImg2, FScourseImg3],
    path: FScoursePDF,
  },
  {
    id: 4,
    docTitle: {
      eng: "Full-stack course_2",
      sk: "Full-stack kurz_2",
      ua: "Full-stack курс_2",
    },
    docImg: FScourseImg2,
    docImgArr: [FScourseImg1, FScourseImg2, FScourseImg3],
    path: FScoursePDF,
  },
  {
    id: 5,
    docTitle: {
      eng: "Full-stack course_3",
      sk: "Full-stack kurz_3",
      ua: "Full-stack курс_3",
    },
    docImg: FScourseImg3,
    docImgArr: [FScourseImg1, FScourseImg2, FScourseImg3],
    path: FScoursePDF,
  },
];
