import React, { useContext } from "react";
import { ScoreResetContext } from "../utils/ScoreResetContext";
import "./Score.css";

const Score = () => {
  const { score, xPlayer } = useContext(ScoreResetContext);
  const { xScore, oScore } = score;

  return (
    <>
      <div className="scoreBoard">
        <div className={`score x-score ${!xPlayer && "inactive"} `}>
          <div>X</div>
          <span>{xScore}</span>
        </div>
        <div className={`score o-score ${xPlayer && "inactive"} `}>
          <div>O</div>
          <span>{oScore}</span>
        </div>
      </div>
    </>
  );
};

export default Score;
