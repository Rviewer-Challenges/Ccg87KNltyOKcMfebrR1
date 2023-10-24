import "./SingleCard.css";
import { useParams } from "react-router-dom";

export default function SingleCard({ card, handleChoice, flipped }) {
  const { difficulty } = useParams();

  const handleClick = () => {
    handleChoice(card);
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
