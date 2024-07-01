import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 6px 12px;
  border: 3px solid orange;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.5;
  margin: 5px;
  color: ${(props) => props.color || "red"};
  background-color: ${(props) => props.background || "lightgray"};
`;

const LikeButton = () => {
  return (
    <div>
      <StyledButton>like button</StyledButton>
      <StyledButton color="purple" background="lightblue">
        like button
      </StyledButton>
    </div>
  );
};

export default LikeButton;
export { StyledButton };
