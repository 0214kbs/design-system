import styled from "styled-components";
import { InputStyles } from "./Input.type";

const StyledInput = styled.input<InputStyles>`
  border-radius: 5px;
  padding: 5px;
  border: solid 1px #dadada;
  background-color: ${({ bgcolor }) => bgcolor};
  box-sizing: border-box;
`;

export { StyledInput };
