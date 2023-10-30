import "./GameOver.css";

export default function GameOver({
  turnsNeeded,
  timeLeft,
  level,
  matchesMade,
  Pairs,
}) {
  if ((matchesMade == Pairs && turnsNeeded > 0) || timeLeft === 0) {
    return (
      <>
        <div className="game_over_popup">
          <h2>{timeLeft === 0 ? "GAME OVER" : "YOU ARE A HERO!"}</h2>
          <p>
            Turns Used: {turnsNeeded} | Time Remaining: {timeLeft}{" "}
            {timeLeft == 1 ? "second" : "seconds"} | Matches Made: {matchesMade}{" "}
            | Level: {level}
          </p>
        </div>
      </>
    );
  }
}
