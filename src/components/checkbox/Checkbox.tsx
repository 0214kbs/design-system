
import React from "react";
import { StyledCheckboxContainer, StyledCheckbox, StyledP } from "./Checkbox.styled"
import { CheckboxStyles } from "./Checkbox.type";

const Checkbox = (props: CheckboxStyles) => {
    return (
        <>
            <StyledCheckboxContainer>
                <StyledCheckbox type="checkbox" {...props} />
                <StyledP>{props.text}</StyledP>
            </StyledCheckboxContainer>
        </>
    )
};

export default Checkbox;