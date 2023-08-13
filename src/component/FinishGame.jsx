import React, { useContext, useState } from "react";
import { ScoreResetContext } from "../utils/ScoreResetContext";
import Button from "../ui/Button";

const FinishGame = () => {
  const {
    score,
    setBoard,
    setXPlayer,
    setWinner,
    setFinishRound,
    setFinishGame,
    setTakeLastRound,
  } = useContext(ScoreResetContext);
  const { xScore, oScore } = score;
  const handleFinishGame = () => {
    setBoard(Array(9).fill(null));
    setWinner("");
    setFinishRound(false);
    setFinishGame(true);
    if (xScore == oScore) {
      setTakeLastRound(true);
    }
  };
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <div className="container">
      <Button
        style={{
          border: "1px solid #4169E1",
          backgroundColor: isHovering ? "#FFFFFF" : "#4169E1",
          color: isHovering ? "#4169E1" : "#FFFFFF",
        }}
        onClick={handleFinishGame}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {" "}
        Finish
      </Button>
    </div>
  );
};

export default FinishGame;
