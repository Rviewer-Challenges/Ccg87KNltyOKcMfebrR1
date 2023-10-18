import easy from "../assets/img/easy-card.jpg";
import medium from "../assets/img/medium-card.jpg";
import hard from "../assets/img/hard-card.jpg";
import logo from "../assets/img/marvel-logo.png";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <>
      <div className="backdrop">
        <div className="big-font">
          <img className="logo" src={logo} alt="marvel_logo" />
          MEMORY GAME
        </div>
        <p className="mid-font blink_me">SELECT DIFFICULTY LEVEL</p>
        <div className="flex-level">
          <Link className="caption" to="/play/easy">
            <img
              onMouseEnter={showCaption}
              onMouseLeave={showCaption}
              className="level-box"
              id="easy"
              src={easy}
              alt="easy"
            />
            <span id="44caption" className="board_info hidetooltip">
              16 cards
            </span>
          </Link>
          <Link className="caption" to="/play/medium">
            <img
              
              onMouseEnter={showCaption}
              onMouseLeave={showCaption}
              className="level-box"
              src={medium}
              id="medium"
              alt="medium"
            />
            <span id="46caption" className="board_info hidetooltip" >
              24 cards
            </span>
          </Link>
          <Link className="caption" to="/play/hard">
            <img
              className="level-box"
              onMouseEnter={showCaption}
              onMouseLeave={showCaption}
              id="hard"
              src={hard}
              alt="hard"
            />
            <span  id="56caption" className="board_info hidetooltip" >
              30 cards
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}


function showCaption() {
   document.getElementById("56caption").classList.toggle("hidetooltip");
   document.getElementById("46caption").classList.toggle("hidetooltip");
   document.getElementById("44caption").classList.toggle("hidetooltip");
}


