import styled, { css } from "styled-components";
import { DropdownStyles } from "./Dropdown.type";

const StyledDropdownList = styled.ul`
  background-color: #ffffff;
  border: 1px solid #afafaf;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  list-style-type: none;
  margin: 0;
  padding: 0;
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

export { StyledDropdownList, StyledDropdownItem };

// const StyledDropdownList = styled.li.attrs<DropdownStyles>((props) => ({}))`
//   ${(props) => {
//         return css`

//     `
//     }};
// `;

// export { StyledDropdownList };
