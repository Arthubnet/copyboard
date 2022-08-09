import "./band-cards.styles.scss";
function BandsCard({ band, count, setCount }) {
  return (
    <div
      onClick={() => setCount(band.id)}
      id={band.id}
      className={`${
        band.id === count ? "active " : ""
      }bands__container__cards__card`}
    >
      <h3>{band.title}</h3>
      <div className="author">
        <p>{band.author}</p>
        <p>{band.time}</p>
      </div>
    </div>
  );
}

export default BandsCard;
