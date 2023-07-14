import React, { useState } from "react";
import Button from "../button/Button";

const Dropdown = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [dropdownheader, setDropdownHeader] = useState<string>("open");

    const handleDropdownState = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }
    const handleOptionClick = (value: any) => {
        setDropdownHeader(value);
        setIsDropdownOpen(false);
    }

    const options = ["childeren 1", "childeren 2", "childeren 3"];

    return (
        <>
            <Button onClick={handleDropdownState} label={dropdownheader}></Button>
            {isDropdownOpen && (
                <div>
                    <ul>
                        {options.map(option => (
                            <li onClick={() => handleOptionClick(option)} key={Math.random()}>{option}</li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
};

export default Dropdown;
