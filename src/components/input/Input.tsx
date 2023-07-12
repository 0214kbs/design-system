import React from "react";
import { StyledInput } from "./Input.styled";
import { getInputStyles } from "./Input.type";

const Input = ({ placeholder, ...props }: getInputStyles) => {
    return <StyledInput placeholder={placeholder} name={props.name} {...props}></StyledInput>;
};

export default Input;