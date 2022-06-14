import styled from "styled-components";

export const Container = styled.div`
    width: ${props => props.width}; 
    display: flex;
    flex-flow: column wrap;
`

export const InputContainer = styled.div`
    width: 100%;
    height: ${props => props.height}px;
    position: relative;
    border-width: 2px;
    border-radius: 6px;
    border-style: solid;
    border-color: rgba(0,0,0,0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font-size: ${props => props.fontSize}px;
    &.focus{
        border-color: ${props => props.color};
        animation: focusInputContainer 0.2s ease;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);  
        @keyframes focusInputContainer {
            from {
                border-color: black;
                box-shadow: none;
            }
            to {
                border-color: ${props => props.color};
                box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
            }
        }
    }
`

export const Input = styled.input`
    width: 95%;
    height: 90%;
    background: transparent;
    box-sizing: border-box;
    border: none;
    outline: none;
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
    padding-left: 3px;
    padding-right: 3px;
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

export const ErrorText = styled.div`
    color: ${props => props.color};
    width: 100%;
    text-align: left;
    font-size: 0.8em;
    padding-top: 10px;
    padding-bottom: 6px;
    padding-left: 5px;
    font-weight: bold;  
    letter-spacing: 0.5px;
`