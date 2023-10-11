import easy from "../assets/img/easy-card.jpg";
import medium from "../assets/img/medium-card.jpg";
import hard from "../assets/img/hard-card.jpg";
import logo from "../assets/img/marvel-logo.png";

export default function Welcome() {
  return (
    <>
      <div className="backdrop">
        <div className="big-font">
          <img className="logo" src={logo} alt="marvel_logo" />
          MEMORY CARD GAME
        </div>
        <p className="mid-font blink_me">SELECT DIFFICULTY LEVEL</p>
        <div className="flex-level">
          <a className="caption" href="">
            
            <img className="level-box" src={easy} alt="easy" />4x4 
          </a>
          <a className="caption" href="">
            <img className="level-box" src={medium} alt="medium" />4x6 
          </a>
          <a className="caption" href="">
            <img className="level-box" src={hard} alt="hard" />5x6 
          </a>
        </div>
      </div>
    </>
  );
}
