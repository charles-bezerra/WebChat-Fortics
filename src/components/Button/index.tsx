import styled from "styled-components";
import { shadow } from "../../assets/styled-strings";

const Button = styled.button`
    width: 100%;
    padding: 8px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-content: center;
    background-color: ${({color}: Color) => color};
    border-radius: 100%;

    ${shadow}

    &:hover {
        opacity: 0.8;
    }

    &:focus {
        outline: none;
    }
`

export default Button;
