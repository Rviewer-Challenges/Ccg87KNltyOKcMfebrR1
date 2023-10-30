import "./Welcome.css";
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
      <div>
        <div className="big-font">
          <img className="logo" src={logo} alt="marvel_logo" />
          MEMORY GAME
        </div>
        <p className="mid-font blink_me">SELECT DIFFICULTY LEVEL</p>
        <div className="flex-level">
          <Link className="caption" to="/play/easy">
            <img
              onMouseEnter={() =>
                handleEffect("44caption", "easy", easy, easyGIF, "in")
              }
              onMouseLeave={() =>
                handleEffect("44caption", "easy", easy, easyGIF, "out")
              }
              className="level-box"
              id="easy"
              src={easy}
              alt="Difficulty: easy"
            />
            <span id="44caption" className="board_info hidetooltip">
              16 cards
            </span>
          </Link>
          <Link className="caption" to="/play/medium">
            <img
              onMouseEnter={() =>
                handleEffect("46caption", "medium", medium, mediumGIF, "in")
              }
              onMouseLeave={() =>
                handleEffect("46caption", "medium", medium, mediumGIF, "out")
              }
              className="level-box"
              src={medium}
              id="medium"
              alt="Difficulty: medium"
            />
            <span id="46caption" className="board_info hidetooltip">
              24 cards
            </span>
          </Link>
          <Link className="caption" to="/play/hard">
            <img
              className="level-box"
              onMouseEnter={() =>
                handleEffect("56caption", "hard", hard, hardGIF, "in")
              }
              onMouseLeave={() =>
                handleEffect("56caption", "hard", hard, hardGIF, "out")
              }
              id="hard"
              src={hard}
              alt="Difficulty: hard"
            />
            <span id="56caption" className="board_info hidetooltip">
              30 cards
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}

// ANIMATION ON LEVEL IMAGES
function handleEffect(tooltipId, imageId, normalSrc, gifSrc, action) {
  const tooltip = document.getElementById(tooltipId);
  const image = document.getElementById(imageId);
  if (action === "in") {
    tooltip.classList.remove("hidetooltip");
    image.src = gifSrc;
  } else if (action === "out") {
    tooltip.classList.add("hidetooltip");
    image.src = normalSrc;
  }
}
