import { ButtonS, IconZoomDoc } from "./BtnDocModalStyled";

const BtnDocModal = () => {

    const handleOnZoomClick = () => {
        console.log('ZoomClick');
    }

  return (
    <ButtonS type="button" onClick={handleOnZoomClick}>
      <IconZoomDoc />
    </ButtonS>
    
  );
};

export default BtnDocModal;
