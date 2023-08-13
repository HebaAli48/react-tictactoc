import React, { useContext } from "react";
import { ScoreResetContext } from "../utils/ScoreResetContext";

const Round = () => {
  const { round } = useContext(ScoreResetContext);
  const mainStyle = {
    fontFamily: "'Fredoka',sans-serif",
    fontSize: "2rem",
    textAlign: "center",
    textShadow: "0px 0px 3px #e4e4e4",
  };
  return <div style={mainStyle}> Round - {round}</div>;
};

export default Round;
