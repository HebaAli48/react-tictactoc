import React, { useContext, useEffect, useState } from "react";
import { ScoreResetContext } from "../utils/ScoreResetContext";
import Button from "../ui/Button";

const PlayAgain = () => {
  const {
    setBoard,
    setXPlayer,
    setWinner,
    setFinishRound,
    finishRound,
    setFinishGame,
    round,
    setRound,
    winner,
  } = useContext(ScoreResetContext);
  const handleTryAgain = () => {
    setBoard(Array(9).fill(null));
    setXPlayer(true);
    setWinner("");
    setFinishRound(false);
    setFinishGame(false);
  };
  const [isHovering, setIsHovering] = useState(false);
  useEffect(() => {
    const newRound = round + 1; // Calculate the new round value here
    setRound(newRound);
  }, [winner]);
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
          border: "1px solid #228B22",
          backgroundColor: isHovering ? "#FFFFFF" : "#228B22",
          color: isHovering ? "#228B22" : "#FFFFFF",
        }}
        onClick={handleTryAgain}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {" "}
        Continue
      </Button>
    </div>
  );
};

export default PlayAgain;
