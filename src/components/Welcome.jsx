import easy from "../assets/img/easy-card.jpg";
import medium from "../assets/img/medium-card.jpg";
import hard from "../assets/img/hard-card.jpg";
import logo from "../assets/img/marvel-logo.png";

export default function Welcome() {
  return (
    <>
      <div className="negro">
        <div className="big-font">
          <img className="logo" src={logo} alt="marvel_logo" />
          MEMORY CARD GAME
        </div>
        <p className="mid-font blink_me">SELECT DIFFICULTY LEVEL</p>
        <div className="flex-level">
          <a href="">
            <img className="level-box" src={easy} alt="easy" />
          </a>
          <a href="">
            <img className="level-box" src={medium} alt="medium" />
          </a>
          <a href="">
            <img className="level-box" src={hard} alt="hard" />
          </a>
        </div>
      </div>
    </>
  );
}
