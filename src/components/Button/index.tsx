import styled from "styled-components";

interface IButton extends Color {
    size?: "large" | "small";
}

const Button = styled.button`
    width: 100%;
    padding: 8px;
    height: ${ ({ size }: IButton) => (size && size === "small") ? "30px" : "40px" };
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    font-size: ${ ({ size }: IButton) => (size && size === "small") ? "12px" : "16px" };;
    font-weight: 300;
    color: white;
    border: 0;
    background-color: ${({color}: IButton) => color};
    border-radius: 40px;

    &:hover {
        opacity: 0.8;
    }

    &:focus {
        outline: none;
    }
`

export default Button;
