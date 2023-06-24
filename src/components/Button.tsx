import styled from "@emotion/styled";
import React from "react";

interface ButtonProps {
  text: string;
  onClick?: any;
  value?: any;
}

const Button = ({ text, onClick, value }: ButtonProps) => {
  return (
    <StyledButton value={value} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  padding: 12px;
  border: 1px solid transparent;
  border-radius: 8px;
  transition: 0.5s ease-in;
  width: 100%;
  background-color: whitesmoke;
  &:hover {
    color: whitesmoke;
    background-color: darkgreen;
    border: 1px solid beige;
  }
`;
