import React from "react";
import profileImageEditButton from "../images/edit_profile_picture.svg";
import profileEditButton from "../images/edit_button.svg";
import Card from "./Card.js";
import { api } from "../utils/api.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Main(props) {
  function handleCardLike(card) {
    // Verifique mais uma vez se esse cartão já foi curtido
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    console.log(isLiked);

    // Envie uma solicitação para a API e obtenha os dados do cartão atualizados
    if (isLiked) {
      api.unfavoriteCard(card._id).then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      });
    } else {
      api.favoriteCard(card._id).then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      });
    }
  }

  const currentUser = React.useContext(CurrentUserContext);

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getCards()
      .then((result) => {
        setCards(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
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
            src={currentUser.avatar}
            alt="Foto de avatar de Jacques Cousteau"
          />
        </div>
        <div className="profile__info">
          <div className="profile__top-content">
            <h1 className="profile__name">{currentUser.name}</h1>
            <img
              className="profile__edit-button"
              src={profileEditButton}
              alt="Simbolo de edição"
              onClick={props.onEditProfileClick}
            />
          </div>
          <p className="profile__job">{currentUser.about}</p>
        </div>
        <button className="profile__add-button" onClick={props.onAddPlaceClick}>
          +
        </button>
      </section>
      <div className="elements">
        {cards.slice(0, 6).map((element, id) => {
          return (
            <CurrentUserContext.Provider value={currentUser} key={id}>
              <Card
                name={element.name}
                link={element.link}
                likes={element.likes}
                owner={element.owner}
                _id={element._id}
                onCardLike={handleCardLike}
                onCardClick={props.onCardClick}
              />
            </CurrentUserContext.Provider>
          );
        })}
      </div>
    </main>
  );
}

export default Main;
