import "./SingleCard.css";

export default function SingleCard({ card, handleChoice, flipped, disabled, timer }) {

  const handleClick = () => {
    if (!disabled && timer > 0) {
        handleChoice(card);
        }
  };

  return (
    <div className="card pop_me">
      <div className={flipped ? "flipped" : ""}>
        <img className={flipped && !card.matched && timer == 0 ? "front unmatched" : "front" } src={card.src} alt="card front" />
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


