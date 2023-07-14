import React, { useState } from "react";
import Button from "../button/Button";
import { DropdownStyles } from "./Dropdown.type";

const Dropdown = (props: DropdownStyles) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [dropdownheader, setDropdownHeader] = useState<string>("open");

    const handleDropdownState = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }
    const handleOptionClick = (value: any) => {
        setDropdownHeader(value);
        setIsDropdownOpen(false);
    }

    const options = props.options;
    const headercolor = props.headercolor || "#a2a2a2";

    return (
        <>
            <Button bgcolor={headercolor} onClick={handleDropdownState} label={dropdownheader}></Button>
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
