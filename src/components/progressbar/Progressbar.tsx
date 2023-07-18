
import React from "react";
import { ProgressbarStyles } from "./Progressbar.type";
import { StyledProgressbar, StyledProgressbarContainer, StyledProgressText } from "./Progressbar.styled"
const Checkbox = (props: ProgressbarStyles) => {
    const percent = ((props.value / props.max) * 100).toFixed(1);
    const value = parseInt(percent, 10) >= 100 ? 100 : (parseInt(percent, 10) <= 0) ? 0 : percent;

    return (
        <StyledProgressbarContainer>
            <StyledProgressbar {...props}></StyledProgressbar>
            <StyledProgressText {...props}>{value}%</StyledProgressText>
        </StyledProgressbarContainer>
    )
};

export default Checkbox;