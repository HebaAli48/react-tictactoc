import React from "react";
import "./Button.css";

const Button = ({
  children,
  style,
  onClick,
  onMouseEnter,
  onMouseLeave,
  type = "button",
}) => {
  const clickHandler = () => {
    if (onClick) onClick();
  };
  const onMouseEnterHandler = () => {
    if (onMouseEnter) onMouseEnter();
  };
  const onMouseLeaveHandler = () => {
    if (onMouseLeave) onMouseLeave();
  };
  return (
    <button
      style={style}
      className="button-24"
      type={type}
      onClick={() => clickHandler()}
      onMouseEnter={() => onMouseEnterHandler()}
      onMouseLeave={() => onMouseLeaveHandler()}
    >
      {children}
    </button>
  );
};

export default Button;
