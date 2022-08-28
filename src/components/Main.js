import profileImageEditButton from "../images/edit_profile_picture.svg";
import profileEditButton from "../images/edit_button.svg";

function Main(props) {
  return (
    <>
      <main>
        <section className="profile">
          <div className="profile__avatar">
            <img
              className="profile__avatar-edit-button"
              src={profileImageEditButton}
              alt="Icone de edição da foto."
              onClick={props.onEditAvatarClick}
            />
            <img
              className="profile__avatar-img"
              src="<%=require('./images/perfil.jpg')%>"
              alt="Foto de avatar de Jacques Cousteau"
            />
          </div>
          <div className="profile__info">
            <div className="profile__top-content">
              <h1 className="profile__name">Jacques Cousteau</h1>
              <img
                className="profile__edit-button"
                src={profileEditButton}
                alt="Simbolo de edição"
                onClick={props.onEditProfileClick}
              />
            </div>
            <p className="profile__job">Explorador</p>
          </div>
          <button
            className="profile__add-button"
            onClick={props.onAddPlaceClick}
          >
            +
          </button>
        </section>
        <div className="elements" />
      </main>
    </>
  );
}

export default Main;
