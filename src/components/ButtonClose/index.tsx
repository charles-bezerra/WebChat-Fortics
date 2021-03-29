import styled from "styled-components";
import { MdClose } from "react-icons/md";

const ButtonCloseCore = styled.button`
    background-color: transparent;
    display: flex;
    height: auto;
    width: auto;
    border: none;
    justify-content: center;
    align-content: center;

    &:hover {
        opacity: 0.8;
    }

    &:focus {
        outline: none;
    }
`

interface IButtonClose {
    size: "small" | "large";
}

const LARGE = 24;
const SMALL = 14;

const ButtonClose = ({ size, ...props }: IButtonClose & any ) => {
    const switchSize = (size?: string): number => {
        let result = SMALL;

        switch (size) {
            case "large":
                result = LARGE;
                break;
            case "small":
                result = SMALL;
                break;
        }

        return result;
    }

    return (
        <ButtonCloseCore {...props}>
            <MdClose color="#7C7C7C" size={ switchSize(size) }/>
        </ButtonCloseCore>
    )
}

export default ButtonClose;