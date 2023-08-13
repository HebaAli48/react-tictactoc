import { useState } from "react";
import Reset from "./component/Reset";
import Score from "./component/Score";
import { ScoreResetContext } from "./utils/ScoreResetContext";
import PlayAgain from "./component/PlayAgain";
import Board from "./component/Board";
import Round from "./component/Round";

function App() {
  const [score, setScore] = useState({ xScore: 0, oScore: 0 });
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlayer, setXPlayer] = useState(true);
  const [winner, setWinner] = useState("");
  const [finishRound, setFinishRound] = useState(false);
  const [finishGame, setFinishGame] = useState(false);
  const [round, setRound] = useState(0);
  const [takeLastRound, setTakeLastRound] = useState(false);
  return (
    <>
      <ScoreResetContext.Provider
        value={{
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
          setFinishGame,
          round,
          setRound,
          takeLastRound,
          setTakeLastRound,
        }}
      >
        {finishGame == false && (
          <>
            <Round />
            <Score />{" "}
          </>
        )}

        <Board />
      </ScoreResetContext.Provider>
    </>
  );
}

export default App;
