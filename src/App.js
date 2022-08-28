import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import "./index.css";

import close_button from "./images/Close Icon.svg";
function App() {
  return (
    <>
      <section className="popup popup_edit-profile">
        <div className="popup__background" />
        <div className="popup__container">
          <a className="popup__close">
            <img src={close_button} alt="Simbolo de fechar janela." />
          </a>
          <h2 className="popup__title">Editar perfil</h2>
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
        </div>
      </section>
      <section className="popup popup_add-card">
        <div className="popup__background" />
        <div className="popup__container">
          <a className="popup__close">
            <img src={close_button} alt="Simbolo de fechar janela." />
          </a>
          <h2 className="popup__title">Novo Local</h2>
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
        </div>
      </section>
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
      <section className="popup popup_edit-avatar-photo">
        <div className="popup__background" />
        <div className="popup__container">
          <a className="popup__close">
            <img src={close_button} alt="Simbolo de fechar janela." />
          </a>
          <h2 className="popup__title">Alterar a foto de perfil</h2>
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
        </div>
      </section>
      <section className="popup popup_confirm-delete">
        <div className="popup__background" />
        <div className="popup__container">
          <a className="popup__close">
            <img src={close_button} alt="Simbolo de fechar janela." />
          </a>
          <h2 className="popup__title">Tem certeza?</h2>
          <button className="popup__save-button popup__confirm-delete">
            Sim
          </button>
        </div>
      </section>

      {/* Elementos */}
      <div className="main-page">
        <Header />
        <Main />
        <Footer />
      </div>
      <template id="card-template" />
    </>
  );
}

export default App;
