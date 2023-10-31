import "./Board.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import GameOver from "./GameOver";
import Nav from "./Nav";

const cardImages = [
  { src: "../src/assets/img/game-cards-logos/storm.jpg", matched: false },
  { src: "../src/assets/img/game-cards-logos/black_widow.jpg", matched: false },
  { src: "../src/assets/img/game-cards-logos/daredevil.jpg", matched: false },
  { src: "../src/assets/img/game-cards-logos/deadpool.jpg", matched: false },
  { src: "../src/assets/img/game-cards-logos/hawkeye.jpg", matched: false },
  { src: "../src/assets/img/game-cards-logos/loki.jpg", matched: false },
  {
    src: "../src/assets/img/game-cards-logos/captain_marvel.jpg",
    matched: false,
  },
  { src: "../src/assets/img/game-cards-logos/ironman.jpg", matched: false },
  { src: "../src/assets/img/game-cards-logos/punisher.jpg", matched: false },
  { src: "../src/assets/img/game-cards-logos/spiderman.jpg", matched: false },
  { src: "../src/assets/img/game-cards-logos/thor.jpg", matched: false },
  { src: "../src/assets/img/game-cards-logos/wolverine.jpg", matched: false },
  { src: "../src/assets/img/game-cards-logos/america.jpg", matched: false },
  {
    src: "../src/assets/img/game-cards-logos/black_panther.jpg",
    matched: false,
  },
  { src: "../src/assets/img/game-cards-logos/hulk.jpg", matched: false },
];

export default function Board({}) {
  const { difficulty } = useParams();
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [timer, setTimer] = useState(61);
  const [matches, setMatches] = useState(0);

  //SHUFFLE CARDS and START GAME
  const shuffledCards = () => {
    // initialize/reset timer, turns and matches count
    setTurns(0);
    setMatches(0);
    setTimer(60);

    const cardDeck = document.getElementById("card-deck");
    const instruction = document.getElementById("instruction");

    // game info indicators
    const timeLeft = document.getElementById("time_left");
    const turns = document.getElementById("turns");
    const match_count = document.getElementById("matches");

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

    // hide card deck and show game info indicators
    cardDeck.style.display = "none";
    instruction.style.display = "none";
    turns.style.display = "block";
    timeLeft.style.display = "block";
    match_count.style.display = "block";
  };

  //shake animation on card deck
  function shake() {
    const cardDeck = document.getElementById("card-deck");
    cardDeck.classList.toggle("shake_me");
  }

  // START TIMER
  useEffect(() => {
    const counter = timer > 0 && setInterval(() => setTimer(timer - 1), 1000);
    // Pause timer if all matches
    if (matches === cards.length / 2) {
      clearInterval(counter);
    }
    //cleanup function clears the counter when the component unmounts or when timer change
    return () => clearInterval(counter);
  }, [timer]);

  // HANDLE CHOICE
  // if choice one has a value, then we set choice two
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      // when a choice is made, disable other cards to make unclickable for a moment
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              // increase match count
              setMatches(matches + 1);
              // new object with the matched pair set to true
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  //reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  return (
    <>
      {/* NAV BAR WIth BUTTONS and GAME INFO */}
      <Nav
        difficulty={difficulty}
        turns={turns}
        matches={matches}
        Pairs={cards.length / 2}
        timer={timer}
        shuffledCards={shuffledCards}
        shake={shake}
      />

      {/* CARD DECK WITH HOVER SHAKE ANIMATION */}
      <div>
        <img
          data-testid="card-deck"
          id="card-deck"
          className="card_deck"
          onClick={shuffledCards}
          onMouseEnter={shake}
          onMouseLeave={shake}
          src="..\src\assets\img\card-deck2.png"
          alt="card deck"
        />
        <p id="instruction">Click on card deck to shuffle cards</p>
      </div>

      {/* LAYOUT CARDS BASED ON LEVEL*/}
      <div
        className={
          difficulty == "easy"
            ? "card-grid-44"
            : difficulty == "medium"
            ? "card-grid-64"
            : "card-grid-65"
        }
      >
        {/* CARD GRID */}
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            difficulty={difficulty}
            handleChoice={handleChoice}
            flipped={
              card === choiceOne ||
              card === choiceTwo ||
              card.matched ||
              timer == 0
            }
            disabled={disabled}
            timer={timer}
          />
        ))}
        {/* GAME OVER POPUP */}
        <div>
          <GameOver
            timeLeft={timer}
            turnsNeeded={turns}
            level={difficulty}
            matchesMade={matches}
            Pairs={cards.length / 2}
          />
        </div>
      </div>
    </>
  );
}


