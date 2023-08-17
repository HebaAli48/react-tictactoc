import React, { useContext, useState } from "react";
import { ScoreResetContext } from "../utils/ScoreResetContext";
import Button from "../ui/Button";
const Reset = () => {
  const {
    setScore,
    setBoard,
    setXPlayer,
    setWinner,
    setFinishRound,
    setFinishGame,
    setRound,
    setTakeLastRound,
  } = useContext(ScoreResetContext);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  const handleReset = () => {
    setScore({ xScore: 0, oScore: 0 });
    setBoard(Array(9).fill(null));
    setXPlayer(true);
    setWinner("");
    setFinishRound(false);
    setFinishGame(false);
    setRound(0);
    setTakeLastRound(false);
  };
  return (
    <div className="container">
      <Button
        style={{
          border: "1px solid #FF4742",

          backgroundColor: isHovering ? "#FFFFFF" : "#FF4742",
          color: isHovering ? "#FF4742" : "#FFFFFF",
        }}
        onClick={handleReset}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {" "}
        New Game
      </Button>
    </div>
  );
};

export default Reset;
