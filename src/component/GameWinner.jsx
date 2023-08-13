import React, { useContext } from "react";
import { ScoreResetContext } from "../utils/ScoreResetContext";
import PlayAgain from "./PlayAgain";
import Reset from "./Reset";

const GameWinner = () => {
  const { score } = useContext(ScoreResetContext);
  const { xScore, oScore } = score;

  const winnerStyle = {
    textAlign: "center",
    fontFamily: "'Fredoka',sans-serif",
    fontSize: "2rem",
    color: xScore > oScore ? "red" : "blue",
    textShadow: "0px 0px 3px #e4e4e4",
  };
  const mainStyle = {
    fontFamily: "'Fredoka',sans-serif",
    fontSize: "2rem",
    textAlign: "center",
    textShadow: "0px 0px 3px #e4e4e4",
  };
  const font = {
    fontSize: "3rem",
  };
  const winStyle = { ...winnerStyle, ...font };

  return (
    <>
      <div style={{ marginTop: "3rem" }}>
        {xScore != oScore && (
          <>
            <h2 style={mainStyle}>
              Congatulations{" "}
              <span style={winnerStyle}>
                player {xScore > oScore ? "X" : "O"}
              </span>
            </h2>

            <h4 style={winStyle}>YOU WIN</h4>

            <div style={mainStyle}>
              <h4>X Score :{xScore} </h4>
              <h4>0 Score :{oScore} </h4>
            </div>
            <Reset />
          </>
        )}
        {oScore == xScore && (
          <>
            <div style={mainStyle}>
              Play Another Round To determine The WINNER
            </div>
            <PlayAgain />
            <p style={mainStyle}>Or Start New Game</p>
            <Reset />
          </>
        )}
      </div>
    </>
  );
};

export default GameWinner;
