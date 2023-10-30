export default function GameOver({
  turnsNeeded,
  timeLeft,
  level,
  matchesMade,
  Pairs,
}) {
  if (matchesMade == Pairs && turnsNeeded >0 || timeLeft === 0) {
    return (
      <>
        <div className="game_over_popup">
          <h1>{timeLeft === 0 ? "GAME OVER" : "YOU ARE A HERO!"}</h1>
          <p>Turns Used: {turnsNeeded}</p>
          <p>Time Remaining: {timeLeft} {timeLeft == 1 ? "second" : "seconds"}</p>
          <p>Matches Made: {matchesMade}</p>
          <p>Level: {level}</p>
        </div>
      </>
    );
  } 
}
