import React, { useContext, useEffect, useState } from "react";
import Box from "./Box";
import { ScoreResetContext } from "../utils/ScoreResetContext";
import PlayAgain from "./PlayAgain";
import Reset from "./Reset";
import "./Board.css";
import FinishGame from "./FinishGame";
import GameWinner from "./GameWinner";
const Board = () => {
  const {
    score,
    setScore,
    board,
    setBoard,
    xPlayer,
    setXPlayer,
    winner,
    setWinner,
    finishRound,
    setFinishRound,
    finishGame,
    round,
    takeLastRound,
  } = useContext(ScoreResetContext);

  const [finalMove, setFinalMove] = useState([]);

  const WIN_CONDITION = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleBoxClick = (boxIdx) => {
    const updatedBoard = board.map((value, idx) => {
      if (boxIdx === idx) {
        return xPlayer === true ? "X" : "O";
      } else {
        return value;
      }
    });
    checkWinner(updatedBoard);

    setXPlayer(!xPlayer);
    setBoard(updatedBoard);
  };

  useEffect(() => {
    if (winner) {
      if (winner === "X") {
        let { xScore } = score;
        xScore++;
        setScore({ ...score, xScore });
      } else {
        let { oScore } = score;
        oScore += 1;
        setScore({ ...score, oScore });
      }
    }
  }, [winner, setScore]);

  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITION.length; i++) {
      const [a, b, c] = WIN_CONDITION[i];
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        setFinishRound(true);
        setWinner(board[a]);
        setFinalMove([...WIN_CONDITION[i]]);
      }
    }
  };

  return (
    <>
      {finishGame === true && <GameWinner />}
      {finishGame === false && (
        <div>
          <Box
            board={board}
            handleBoxClick={handleBoxClick}
            finishRound={finishRound}
            finalMove={finalMove}
            winner={winner}
          />
          <div className="container">
            {takeLastRound == false && finishRound == true && <PlayAgain />}
            {round > 0 && <FinishGame />}
            {takeLastRound == false && <Reset />}
          </div>
        </div>
      )}
    </>
  );
};

export default Board;
