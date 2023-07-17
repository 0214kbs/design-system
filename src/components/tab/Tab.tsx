import React, { useState } from "react";
import { StyledTabContainer, StyledTab, StyledTabMenu, StyledTabItems } from "./Tab.styled"
import { TabStyles } from "./Tab.type";
const Dropdown = (props: TabStyles) => {
    const tabs = props.tabs;
    const tabcontents = props.tabcontents;

    const [currentTab, setCurrentTab] = useState(0);

    const handleSelectTab = (index: any) => {
        setCurrentTab(index);
    };

    return (
        <StyledTabContainer>
            <StyledTab>
                <StyledTabMenu>
                    {tabs.map((el, index: any) => (
                        <li className={index === currentTab ? "submenu focused" : "submenu"}
                            onClick={() => handleSelectTab(index)}>{el}</li>
                    ))}
                </StyledTabMenu>
            </StyledTab>
            <StyledTabItems>
                <p>{tabcontents[currentTab]}</p>
            </StyledTabItems>
        </StyledTabContainer>
    );
};

export default Dropdown;
