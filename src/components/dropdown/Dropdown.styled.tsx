import styled, { css } from "styled-components";
import { DropdownStyles } from "./Dropdown.type";

const StyledDropdownContainer = styled.div<DropdownStyles>`
  ${props =>
    props.hassizelimit && css`
      max-height: 100px;
      overflow-y: auto;
      &::-webkit-scrollbar {
        display: none;
      }
    `}
  border: 1px solid #afafaf;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;


const StyledDropdownList = styled.ul<DropdownStyles>`
  background-color: #ffffff;
  list-style-type: none;
  margin: 0;
  padding: 0;

  ${props =>
    props.hassizelimit && css`
      ::-webkit-scrollbar {
        display: none;
      }
  `}
`;

const StyledDropdownItem = styled.li`
  padding: 8px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.8s ease;
  font-size: 14px;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export { StyledDropdownList, StyledDropdownItem, StyledDropdownContainer };
