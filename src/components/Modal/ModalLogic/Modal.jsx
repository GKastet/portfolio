//import PropTypes from "prop-types";
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { OverlayStyled } from './ModalStyled';
import ModalMarkUp from '../ModalMarkUp/ModalMarkUp';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({isOpen, setIsOpen}) => {  

  useEffect(() => {
    if (!isOpen) return;
    document.body.classList.add('no-scroll');

    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        document.body.classList.remove('no-scroll');
        setIsOpen(false)        
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, setIsOpen]);

  const handleClickOverlay = e => {
    if (e.target === e.currentTarget) {
      document.body.classList.remove('no-scroll');
      setIsOpen(false)      
    }
  };

  const handleClickBtnClose = () => {
    document.body.classList.remove('no-scroll');
    setIsOpen(false)    
  };

  return createPortal(
    <>
      <OverlayStyled onClick={handleClickOverlay}>
        <div>
          {isOpen && <ModalMarkUp handleClickBtnClose={handleClickBtnClose} />}
        </div>
      </OverlayStyled>
    </>,
    modalRoot
  );
};

export default Modal