import styled, { css } from "styled-components";
import { ButtonStyles } from "./button.type";
import Button from "./Button";

const StyledButton = styled.button.attrs<ButtonStyles>((props) => ({}))`
  ${(props) => {
    const size = props.size || "medium";
    const use = props.use || "basic";
    const bgcolor = props.bgcolor || "#2938ff";
    const color = props.color || "white";

    const UseStyles: any = {
      basic: `
        background-color: ${bgcolor};
        color: ${color};

        &:hover{
          opacity:0.5;
        }

      `,

      secondary: `
        background-color:white;
        border: 2px solid ${bgcolor};
        color: #666666;
        &:hover{
          opacity:0.5;
          background-color: #dbdada;
        }
      `,

      warn: `
        background-color: #f4fd6c;
        color: #666666;
      `,

      error: `
        background-color: #ff2020c0;
        color: white;
      `,

      disable: `
        background-color: #cccccc;
        color: #666666;
        cursor: not-allowed;
      `,
    };

    const ButtonSizes = {
      small: `
      padding: 10px 16px;
      font-size: 12px;
    `,
      medium: `
      padding: 11px 20px;
      font-size: 16px;
    `,
      large: `
      padding: 12px 24px;
      font-size: 20px;
    `,
    };

    return css`
      cursor: pointer;
      border: 0px;
      border-radius: 5px;
      line-height: 1;

      ${UseStyles[use]};
      ${ButtonSizes[size]}
    `;
  }};
`;

export { StyledButton };
