import React, { ReactEventHandler } from "react";

interface StarProps {
  filled: any;
  onClick: ReactEventHandler;
}

function Star({ filled, onClick }: StarProps) {
  return (
    <i
      onClick={onClick}
      className={`fas fa-star ${filled ? "yellow" : "lightgray"} `}
    ></i>
  );
}

export default Star;
