import styled from "styled-components";
const StyledTabContainer = styled.div`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    `

const StyledTab = styled.div`
  background-color: ${props => props.theme.colors.pantone};
  border-radius: 4px 4px 0 0;
  `;
const StyledTabMenu = styled.ul`
  border-radius: 4px 4px 0 0;
  display: flex;
  margin: 0;
  list-style-type: none;
  
  color: white;
  font-weight: bold;
  font-size: 18px;
  padding: 5px 60px 0px 5px;
  
  cursor: pointer;
  
  .submenu {
    border-radius: 4px 4px 0 0;
    padding: 8px 18px;
    margin: 1px 1px 0px 1px;
    flex-direction: column;
    /* background-color: ${props => props.theme.colors.base}; */
  }

  .focused {
    background-color: white;
    color: ${props => props.theme.colors.pantone};
  }

`;

const StyledTabItems = styled.div`
  text-align: center;
  margin: 0;
  padding: 20px;
`;

export { StyledTabContainer, StyledTab, StyledTabMenu, StyledTabItems };