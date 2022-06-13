import styled from "styled-components";

export const InputContainer = styled.div`
    width: ${props => props.width};
    height: ${props => props.height}px;
    position: relative;
    border-width: 2px;
    border-radius: 5px;
    border-style: solid;
    border-color: rgba(0,0,0,0.2);
    font-size: ${props => props.fontSize}px;
    &.focus{
        border-color: ${props => props.color};
        animation: focusInputContainer 0.2s ease;
        @keyframes focusInputContainer {
            from {
                border-color: black;
            }
            to {
                border-color: ${props => props.color};
            }
        }
    }
`

export const Input = styled.input`
    width: 100%;
    height: 100%;
    padding-left:10px;
    padding-right:10px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 5px;
    font-size: 1em;
    &::placeholder{
        display: none;
        font-size: 1em;
        color: rgba(0,0,0,0.5);
    }
    &.blur {
            animation: blur 0.2s ease;
            height: 100%;
            @keyframes blur {
                from {
                    opacity: 0;
                    height: 0px;
                }
                to {
                    opacity: 1;
                    height: 100%;
                }
            }
    }
`

export const Title = styled.div`
    position: absolute;
    display: none;
    background: white;
    align-items: center;
    padding-left: 5px;
    padding-right: 5px;
    font-size: 0.8em;
    &.focus-no-value {
        display: flex;
        left: 5px;
        top: -10px;
        animation: focus 0.2s ease;
        color: ${props => props.color};
    }
    &.focus-has-value {
        display: flex;
        left: 5px;
        top: -10px;
        color: ${props => props.color};
        animation: focusTitle 0.2s ease;
        @keyframes focusTitle {
            from {
                color: black;
            }
            to {
                color: ${props => props.color};
            }
        }
    }
    &.blur-has-value {
        display: flex;
        left: 5px;
        top: -10px;
        color: black;
    }
    @keyframes focus {
        from {
            top: 0px;
        }
        to {
            top: -10px;
        }
    }
`