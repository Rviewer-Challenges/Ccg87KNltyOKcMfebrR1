import "./SingleCard.css";

export default function SingleCard({ card, handleChoice, flipped, disabled }) {

  const handleClick = () => {
    if (!disabled) {
        handleChoice(card);
        }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          onClick={handleClick}
          src="..\src\assets\img\game-cards-logos\back.jpg"
          alt="card back"
        />
        
      </div>
    </div>
  );
}
