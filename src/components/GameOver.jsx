export default function GameOver({
  turnsNeeded,
  timeLeft,
  level,
  matchesMade,
  remainingPairs,
}) {
  if (matchesMade == matchesMade + remainingPairs || timeLeft === 0) {
    return (
      <>
        <div>
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
