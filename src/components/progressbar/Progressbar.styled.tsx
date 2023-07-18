import styled, { css } from "styled-components";
import { ProgressbarStyles } from "./Progressbar.type";

const StyledProgressbarContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`
const StyledProgressbar = styled.progress.attrs<ProgressbarStyles>((props) => ({
    value: props.value,
    max: props.max,
}))`
  ${(props) => {
        const base = props.theme.colors.base;
        const pantone = props.theme.colors.pantone;
        const left = (props.value / props.max) * 100;

        const isFull = left >= 97.8;
        return css`
            appearance: none;
            position: relative;

            width: 250px;
            height: 20px;
            
            &::-webkit-progress-bar {
                border-radius:10px;
                background-color: ${base};
            }
            
            &::-webkit-progress-value{
                border-bottom-left-radius: 10px;
                border-top-left-radius: 10px;
                border-bottom-right-radius: ${left >= 97.8 ? '10px' : '0'};
                border-top-right-radius: ${left >= 97.8 ? '10px' : '0'};
                background-color: ${pantone};
            }
            `
    }}
  
  `;


const StyledProgressText = styled.div.attrs<ProgressbarStyles>((props) => ({
}))`
  ${(props) => {
        const percent = (props.value / props.max) * 100;
        const left = (percent >= 100) ? 100 : (percent <= 0) ? 0 : percent;

        return css`
            position: absolute;
            top: -2px;
            left: ${left.toString()}px;
            color: #eeeeee;
        `
    }}
`;

export { StyledProgressbar, StyledProgressbarContainer, StyledProgressText }