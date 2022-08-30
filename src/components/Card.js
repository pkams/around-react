import trash_icon from "../images/trash_icon.svg";
import like_icon from "../images/like_icon.svg";

function Card(props) {
  function handleClick() {
    props.onCardClick({ link: props.link, name: props.name });
  }

  return (
    <>
      <div className="card">
        <img
          className="card__image"
          src={props.link}
          alt="Imagem do cartão baseada no link inserido pelo usuário."
          onClick={handleClick}
        />
        <div className="card__bottom">
          <p className="card__text-title">{props.name}</p>
          <div className="card__like-section">
            <img
              className="card__like-button"
              src={like_icon}
              alt="Um coração que representa o simbolo de like"
            />
            <p className="card__like-count">{props.likes.length}</p>
          </div>
        </div>
        <img className="card__trash-button" src={trash_icon} />
      </div>
    </>
  );
}

export default Card;
