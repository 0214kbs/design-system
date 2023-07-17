import styled, { css } from "styled-components";
import { CheckboxStyles } from "./Checkbox.type";

const StyledCheckboxContainer = styled.div`
    display: flex;
    align-items: center;
`
const StyledCheckbox = styled.input.attrs<CheckboxStyles>((props) => ({
    value: props.value,
    name: props.name || props.value,
}))`
  ${(props) => {
        return css`
            appearance: none;
            border: 1.5px solid gainsboro;
            border-radius: 0.35rem;
            width: 1.5rem;
            height: 1.5rem;

            &:checked {
                border-color: transparent;
                background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
                background-size: 100% 100%;
                background-position: 50%;
                background-repeat: no-repeat;
                background-color: ${props => props.theme.colors.pantone};
            }
        `
    }}
  
  `;

const StyledP = styled.p`
    padding-bottom: 5px;
    padding-left: 3px;
`
export { StyledCheckboxContainer, StyledP, StyledCheckbox };
