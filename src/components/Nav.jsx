import "./Nav.css";
import { Link } from "react-router-dom";

export default function Nav({
  difficulty,
  turns,
  matches,
  Pairs,
  timer,
  shuffledCards,
  shake,
}) {
  return (
    <nav>
      <button
        className={timer == 0 || matches == Pairs ? "blink_me" : ""}
        onClick={shuffledCards}
        onMouseOver={shake}
        onMouseLeave={shake}
      >
        NEW GAME
      </button>
      <Link to="/">
        <button>CHANGE DIFFICULTY</button>
      </Link>
      <span className="right game_info">
        {/* when difficulty has value use the upper method */}
        DIFFICULTY: {difficulty ? difficulty.toUpperCase() : 'Unknown'}
      </span>
      <span id="turns" className="game_info hidden">
        TURNS: {turns}
      </span>
      <span id="matches" className="game_info hidden">
        MATCHES: {matches + " / " + Pairs}
      </span>
      <span
        id="time_left"
        className={timer > 0 ? "game_info hidden" : "game_info blink_me"}
      >
        TIME LEFT: {timer}
      </span>
    </nav>
  );
}
