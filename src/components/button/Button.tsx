import React from "react";
import { StyledButton } from "./Button.styled";
import { ButtonStyles } from "./button.type";

const Button = (props: ButtonStyles) => {
  return (
    <>
      <StyledButton {...props}>{props.label || "Button"}</StyledButton>
    </>
  );
};

export default Button;
