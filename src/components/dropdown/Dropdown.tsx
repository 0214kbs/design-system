import React, { useState } from "react";
import Button from "../button/Button";
import { DropdownStyles } from "./Dropdown.type";
import { StyledDropdownContainer, StyledDropdownList, StyledDropdownItem } from "./Dropdown.styled";
const Dropdown = (props: DropdownStyles) => {
  const options = props.options;
  const headercolor = props.headercolor || "#a2a2a2";
  const isShowSelected = props.isshowselected;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownheader, setDropdownHeader] = useState<string>("open");

  const handleDropdownState = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleOptionClick = (value: any) => {
    {
      isShowSelected && (
        setDropdownHeader(value));
    };
    console.log(value);
    setIsDropdownOpen(false);
  };


  return (
    <>
      <Button bgcolor={headercolor} onClick={handleDropdownState} label={dropdownheader}></Button>
      {isDropdownOpen && (
        <StyledDropdownContainer {...props}>
          <StyledDropdownList {...props}>
            {options.map((option) => (
              <StyledDropdownItem onClick={() => handleOptionClick(option)} key={Math.random()}>
                {option}
              </StyledDropdownItem>
            ))}
          </StyledDropdownList>
        </StyledDropdownContainer>
      )}
    </>
  );
};

export default Dropdown;
