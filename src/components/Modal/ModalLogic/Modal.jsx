//import PropTypes from "prop-types";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { docs } from "../../helpers/docs";
import ModalMarkUp from "../ModalMarkUp/ModalMarkUp";
import { OverlayStyled } from "./ModalStyled";

const modalRoot = document.querySelector("#modal-root");

export const Modal = ({ isOpen, setIsOpen, docId }) => {
  const docItem = docs.find((doc) => doc.id === docId);

  useEffect(() => {
    if (!isOpen) return;
    document.body.classList.add("no-scroll");

    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        document.body.classList.remove("no-scroll");
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, setIsOpen]);

  const handleClickOverlay = (e) => {
    if (e.target === e.currentTarget) {
      document.body.classList.remove("no-scroll");
      setIsOpen(false);
    }
  };

  const handleClickBtnClose = () => {
    document.body.classList.remove("no-scroll");
    setIsOpen(false);
  };

  // return createPortal(
  //   <>
  //     {isOpen && (
  //       <OverlayStyled onClick={handleClickOverlay}>
  //         <ModalContainer>
  //           <ModalMarkUp docItem={docItem} handleClickBtnClose={handleClickBtnClose} />
  //         </ModalContainer>
  //       </OverlayStyled>
  //     )}
  //   </>,
  //   modalRoot
  // );

  return createPortal(
    <>
      <OverlayStyled onClick={handleClickOverlay}>
        <div>
          {isOpen && (
            <ModalMarkUp
              docItem={docItem}
              handleClickBtnClose={handleClickBtnClose}
            />
          )}
        </div>
      </OverlayStyled>
    </>,
    modalRoot
  );
};

export default Modal;
