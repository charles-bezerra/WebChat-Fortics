import styled from "styled-components";

const Button = styled.button`
    width: 100%;
    padding: 8px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 300;
    color: white;
    border: 0;
    background-color: ${({color}: Color) => color};
    border-radius: 40px;

    &:hover {
        opacity: 0.8;
    }

    &:focus {
        outline: none;
    }
`

export default Button;
