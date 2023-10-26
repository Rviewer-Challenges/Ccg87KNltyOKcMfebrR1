import easy from "../assets/img/easy-card.jpg";
import easyGIF from "../assets/img/spider.gif";
import medium from "../assets/img/medium-card.jpg";
import mediumGIF from "../assets/img/ironman.gif";
import hard from "../assets/img/hard-card.jpg";
import hardGIF from "../assets/img/hulk-roar.gif";
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
              onMouseEnter={easyEffectIn}
              onMouseLeave={easyEffectOut}
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
              
              onMouseEnter={medEffectIn}
              onMouseLeave={medEffectOut}
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
              onMouseEnter={hardEffectIn}
              onMouseLeave={hardEffectOut}
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
   document.getElementById("hard").src=hardGIF
   document.getElementById("46caption").classList.toggle("hidetooltip");
   document.getElementById("44caption").classList.toggle("hidetooltip");
}

function hardEffectIn() {
  document.getElementById("56caption").classList.remove("hidetooltip");
  document.getElementById("hard").src=hardGIF
}
function hardEffectOut() {
  document.getElementById("56caption").classList.add("hidetooltip");
  document.getElementById("hard").src=hard
}

function medEffectIn() {
  document.getElementById("46caption").classList.remove("hidetooltip");
  document.getElementById("medium").src=mediumGIF
}
function medEffectOut() {
  document.getElementById("46caption").classList.add("hidetooltip");
  document.getElementById("medium").src=medium
}

function easyEffectIn() {
  document.getElementById("44caption").classList.remove("hidetooltip");
  document.getElementById("easy").src=easyGIF
}
function easyEffectOut() {
  document.getElementById("44caption").classList.add("hidetooltip");
  document.getElementById("easy").src=easy
}




