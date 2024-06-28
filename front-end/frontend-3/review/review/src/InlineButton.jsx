import React from "react";

const InlineButton = () => {
  const btnStyle = {
    color: "black",
    background: "pink",
    border: "1px solid pink",
    borderRadius: "15rem",
    padding: "15px",
    fontSize: "20px",
  };

  return (
    <div>
      <button style={btnStyle}>나는 inline style이다.</button>
    </div>
  );
};

export default InlineButton;
