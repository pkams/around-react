import close_button from "../images/close_icon.svg";

function ImagePopup(props) {
  return (
    <>
      <div className="popup popup_view-image">
        <div className="popup__background" />
        <div className="popup__container-view-image">
          <a className="popup__close popup__close_view-image">
            <img src={close_button} alt="Simbolo de fechar janela." />
          </a>
          <img
            className="popup__image"
            src="<%=require('./images/1.jpg')%>"
            alt="Popup image"
          />
          <p className="popup__image-name">Local name</p>
        </div>
      </div>
    </>
  );
}

export default ImagePopup;
