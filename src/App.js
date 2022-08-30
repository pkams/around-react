import React from "react";

import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import PopupWithForm from "./components/PopupWithForm.js";
import ImagePopup from "./components/ImagePopup.js";
import "./index.css";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setAddPlacePopupOpen(false);
    setEditProfilePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard(false);
  }

  return (
    <>
      <div className="main-page">
        <PopupWithForm
          name="edit-profile"
          title="Editar perfil"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <form className="popup__form">
            <input
              type="text"
              id="name"
              name="name"
              className="popup__form-input"
              placeholder="Nome"
              required=""
              minLength={2}
              maxLength={20}
            />
            <span className="popup__form-error name-error" />
            <input
              type="text"
              id="job"
              name="job"
              className="popup__form-input"
              placeholder="Sobre mim"
              required=""
              minLength={2}
              maxLength={200}
            />
            <span className="popup__form-error job-error" />
            <button className="popup__save-button popup__save-button_inactive">
              Salvar
            </button>
          </form>
        </PopupWithForm>
        <PopupWithForm
          name="add-card"
          title="Novo Local"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <form className="popup__form">
            <input
              type="text"
              id="title"
              name="title"
              className="popup__form-input"
              placeholder="Titulo"
              required=""
              minLength={2}
              maxLength={30}
            />
            <span className="popup__form-error title-error" />
            <input
              type="url"
              id="image-url"
              name="image-url"
              className="popup__form-input"
              placeholder="Link da imagem"
              required=""
            />
            <span className="popup__form-error image-url-error" />
            <button className="popup__save-button popup__add-card-save-button popup__save-button_inactive">
              Salvar
            </button>
          </form>
        </PopupWithForm>
        <PopupWithForm
          name="edit-avatar-photo"
          title="Alterar a foto de perfil"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <form className="popup__form">
            <input
              type="url"
              id="new-image-url"
              name="new-image-url"
              className="popup__form-input"
              placeholder="Link da nova imagem"
              required=""
            />
            <span className="popup__form-error new-image-url-error" />
            <button className="popup__save-button popup__edit-photo-save-button popup__save-button_inactive">
              Salvar
            </button>
          </form>
        </PopupWithForm>
        <PopupWithForm name="confirm-delete" title="Tem certeza?">
          <button className="popup__save-button popup__confirm-delete">
            Sim
          </button>
        </PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <Header />
        <Main
          onEditAvatarClick={handleEditAvatarClick}
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />
      </div>
      <template id="card-template" />
    </>
  );
}

export default App;
