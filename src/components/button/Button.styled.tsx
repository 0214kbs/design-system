import styled, { css } from "styled-components";
import { ButtonStyles } from "./button.type";

const StyledButton = styled.button.attrs<ButtonStyles>((props) => ({}))`
  ${(props) => {
    const middle = props.theme.colors.middle;
    const gray = props.theme.colors.gray;
    const black = props.theme.colors.black;

    const use = props.use || "basic";
    const bgcolor = props.bgcolor || middle;
    const color = props.color || "white";
    const width = props.width || '100px';
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
        color: ${black};
        &:hover{
          opacity:0.5;
          background-color: #dbdada;
        }
      `,

      warn: `
        background-color: #f4fd6c;
        color: ${black};
      `,

      error: `
        background-color: #ff2020c0;
        color: white;
      `,

      disable: `
        background-color: ${gray};
        color: ${black};
        cursor: not-allowed;
      `,
    };


    return css`
      cursor: pointer;
      border: 0px;
      border-radius: 5px;
      line-height: 1;
      padding: 10px;
      width : ${width};
      ${UseStyles[use]};
      `;
  }};
`;

export { StyledButton };
