import React from "react";
import profileImageEditButton from "../images/edit_profile_picture.svg";
import profileEditButton from "../images/edit_button.svg";
import Card from "./Card.js";
import { api } from "../utils/api.js";

function Main(props) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getProfileInformation()
      .then((result) => {
        console.log(result);
        setUserName(result.name);
        setUserDescription(result.about);
        setUserAvatar(result.avatar);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    api
      .getCards()
      .then((result) => {
        setCards(result);
        console.log(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(cards);

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
              src={userAvatar}
              alt="Foto de avatar de Jacques Cousteau"
            />
          </div>
          <div className="profile__info">
            <div className="profile__top-content">
              <h1 className="profile__name">{userName}</h1>
              <img
                className="profile__edit-button"
                src={profileEditButton}
                alt="Simbolo de edição"
                onClick={props.onEditProfileClick}
              />
            </div>
            <p className="profile__job">{userDescription}</p>
          </div>
          <button
            className="profile__add-button"
            onClick={props.onAddPlaceClick}
          >
            +
          </button>
        </section>
        <div className="elements">
          {cards.slice(0, 6).map((element, id) => {
            return (
              <Card
                id={element.id}
                name={element.name}
                link={element.link}
                likes={element.likes}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}

export default Main;
