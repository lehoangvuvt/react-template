import styled from "styled-components";

export const CustomButton = styled.button`
    width: ${props => props.width};
    height: ${props => props.height};
    cursor: pointer;
    background: ${props => props.background};
    color: ${props => props.color};
    border: none;
    outline: none;
    box-sizing: border-box;
    border-radius: 6px;
    font-weight: bold;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: ${props => props.fontSize}px;
    &.loading {
        cursor: not-allowed;
        opacity: 0.5;
    }
`