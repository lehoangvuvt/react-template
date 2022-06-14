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
    filter: brightness(90%);
    transition: all 0.3s ease;
    font-size: ${props => props.fontSize}px;
    &.loading {
        cursor: not-allowed;
        opacity: 0.5;
    }
    &:hover{
        filter: brightness(100%);
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
    }
    animation: enable 0.3s ease;
    @keyframes enable {
        from {
            filter: brightness(60%);
        }
        to {
            filter: brightness(90%);
        }
    }
    &:disabled{
        cursor: not-allowed;
        filter: brightness(60%);
        animation: disabled 0.3s ease;
        @keyframes disabled {
            from {
                filter: brightness(90%);
            }
            to {
                filter: brightness(60%);
            }
        }
        &:hover{
            filter: brightness(60%);
            box-shadow: none;
        }
    }
`