import styled, { css } from "styled-components";
import { DropdownStyles } from "./Dropdown.type";
import Check from "../../../public/check.svg"

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

`;

const StyledDropdownItem = styled.li`
  padding: 8px;
  cursor: pointer;
  transition: background-color 0.8s ease;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    background-color: #f0f0f0;
  }
  `;

const StyledText = styled.span`
text-align: left;
  
`
const StyledCheckImage = styled(Check)`
  width: 14px;
`
export { StyledDropdownList, StyledDropdownItem, StyledDropdownContainer, StyledText, StyledCheckImage };
