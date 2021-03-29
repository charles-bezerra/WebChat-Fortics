import { ReactNode } from "react";
import styled from "styled-components";
import useTheme from "../../hooks/useTheme";
import Button from "../Button";
import Row from "../Row";

interface IButtonChat {
    children: ReactNode;
    index: number;
    props: any;
}

const ButtonChatCore = styled(Button)`
    justify-content: flex-start;
`

const CircleWhite = styled.div`
    width: 24px;
    height: 24px;
    color: ${ ({color}: Color) => color };
    background-color: white;
    margin-left: 4px;

    border-radius: 24px;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
`

const ButtonChat = ({ children, index, ...props }: IButtonChat) => { 
    const { colors } = useTheme();

    return (
        <ButtonChatCore color={colors.secondaryColor} {...props}>
            <Row>
                <CircleWhite color={colors.secondaryColor}/> 
                {children}            
            </Row>
        </ButtonChatCore>
    )
}

export default ButtonChat;
