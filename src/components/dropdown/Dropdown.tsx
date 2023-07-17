'use client'
import React, { useState } from "react";
// import Check from "../../../public/check.svg"
import Button from "../button/Button";
import { DropdownStyles } from "./Dropdown.type";
import { StyledDropdownContainer, StyledDropdownList, StyledDropdownItem, StyledText, StyledCheckImage } from "./Dropdown.styled";
const Dropdown = (props: DropdownStyles) => {
  const options = props.options;
  const headercolor = props.headercolor;
  const isShowSelected = props.isshowselected;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownheader, setDropdownHeader] = useState<string>("open");
  const [checked, setChecked] = useState("");

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
    setChecked(value);
  };


  return (
    <>
      <Button bgcolor={headercolor} onClick={handleDropdownState} label={dropdownheader}></Button>
      {isDropdownOpen && (
        <StyledDropdownContainer {...props}>
          <StyledDropdownList {...props}>
            {options.map((option) => (
              <StyledDropdownItem onClick={() => handleOptionClick(option)} key={Math.random()}>
                <StyledText>{option}</StyledText>
                {checked === option && <StyledCheckImage />}
              </StyledDropdownItem>
            ))}
          </StyledDropdownList>
        </StyledDropdownContainer>
      )}
    </>
  );
};

export default Dropdown;
