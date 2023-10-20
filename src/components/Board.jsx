import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

const cardImages = [
  { src: "../src/assets/img/game-cards-logos/america.jpg" },
  { src: "../src/assets/img/game-cards-logos/black_panther.jpg" },
  { src: "../src/assets/img/game-cards-logos/black_widow.jpg" },
  { src: "../src/assets/img/game-cards-logos/captain_marvel.jpg" },
  { src: "../src/assets/img/game-cards-logos/daredevil.jpg" },
  { src: "../src/assets/img/game-cards-logos/deadpool.jpg" },
  { src: "../src/assets/img/game-cards-logos/hawkeye.jpg" },
  { src: "../src/assets/img/game-cards-logos/hulk.jpg" },
  { src: "../src/assets/img/game-cards-logos/ironman.jpg" },
  { src: "../src/assets/img/game-cards-logos/loki.jpg" },
  { src: "../src/assets/img/game-cards-logos/punisher.jpg" },
  { src: "../src/assets/img/game-cards-logos/spiderman.jpg" },
  { src: "../src/assets/img/game-cards-logos/storm.jpg" },
  { src: "../src/assets/img/game-cards-logos/thor.jpg" },
  { src: "../src/assets/img/game-cards-logos/wolverine.jpg" },
];

function Board({}) {
  const { difficulty } = useParams();
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  //shuffle cards
  const shuffledCards = () => {
    const cardDeck = document.getElementById("card-deck");
    const instruction = document.getElementById("instruction");
    const timeLeft = document.getElementById("time_left");
    const turns = document.getElementById("turns");
    //filter cards based on difficulty level
    let filteredCards = [...cardImages];
    if (difficulty == "easy") {
      filteredCards.splice(0, 7);
    } else if (difficulty == "medium") {
      filteredCards.splice(0, 3);
    } else {
      filteredCards;
    }
    // spread cards array and duplicate them
    const shuffledCards = [...filteredCards, ...filteredCards]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);

    // refresh turns
    setTurns(0);

    // hide card deck and show game info
    cardDeck.style.display = "none";
    instruction.style.display = "none";
    turns.style.display = "block";
    timeLeft.style.display = "block";
  };

  function shake() {
    const cardDeck = document.getElementById("card-deck");
    cardDeck.classList.toggle("shake");
  }

  return (
    <>
      <nav>
        <button
          onClick={shuffledCards}
          onMouseOver={shake}
          onMouseLeave={shake}
        >
          SHUFFLE CARDS
        </button>
        <Link to="/">
          <button>BACK HOME</button>
        </Link>
        <span className="right game_info">
          DIFFICULTY: {difficulty.toUpperCase()}
        </span>
        <span id="turns" className="game_info hidden">
          TURNS: 2
        </span>
        <span id="time_left" className="game_info hidden">
          TIME LEFT: 59seg
        </span>
      </nav>

      {/* SHUFFLE ANIMATION */}
      <div className="backdrop">
        <img
          id="card-deck"
          className="card_deck gentle-hover-shake"
          onClick={shuffledCards}
          src="..\src\assets\img\card-deck2.png"
          alt="card deck"
        />
        <p id="instruction">Click on deck to shuffle cards</p>
      </div>

      <div className="card-flex">
        {cards.map((card) => (
          <div
            className={
              difficulty == "easy" ? 'card-box44' : difficulty == "medium"
                ? "card-box64"
                : "card-box65"
            }
            key={card.id}
          >
            
              {/* <img className="front" src={card.src} alt="card front"/> */}
              <img
                className="back"
                src="..\src\assets\img\game-cards-logos\back.jpg"
                alt="card back"
              /> 
            
          </div>
        ))}
      </div>
    </>
  );
}

export default Board;
