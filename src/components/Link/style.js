import styled from "styled-components";

export const CustomLink = styled.p`
    color: #0061FF;
    cursor: pointer;
    font-size: ${props => props.fontSize}px;
    &:hover {
        text-decoration: underline;
    }
`