import React from "react";
import "./Box.css";
const Box = ({ board, handleBoxClick, finishRound, finalMove, winner }) => {
  const winnerClass = winner ? winner.toLowerCase() : "";
  return (
    <>
      <div className="grid">
        {board.map((value, index) => (
          <button
            key={index}
            className={
              finishRound === false
                ? value === "X"
                  ? "box x playing"
                  : "box o playing"
                : finalMove?.includes(index)
                ? `box finish ${winnerClass}`
                : "box finish"
            }
            onClick={() => value === null && handleBoxClick(index)}
            disabled={finishRound === true}
          >
            {value}
          </button>
        ))}
      </div>
    </>
  );
};

export default Box;
