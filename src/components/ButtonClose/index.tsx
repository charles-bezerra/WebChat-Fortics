import styled from "styled-components";
import { MdClose } from "react-icons/md";

const ButtonCloseCore = styled.button`
    background-color: none;
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

const ButtonClose = (props: any) => (
    <ButtonCloseCore {...props}>
        <MdClose color="#7C7C7C" size={14}/>
    </ButtonCloseCore>
)

export default ButtonClose;