import styled from 'styled-components';
import { shadow } from '../../assets/styled-strings';

//Contents
import ChatInit from '../Contents/ChatInit';

//hooks
import useTheme from '../../hooks/useTheme';
import Row from '../Row';
import ButtonClose from '../ButtonClose';
import BarChat from '../BarChat';
import { useCallback, useEffect, useState } from 'react';
import SwitchInit from '../Contents/SwitchInit';
import Talk from '../Contents/Talk';

interface IChatArea extends Color{
    visible: boolean;
}

interface IChat {
    visible: boolean;
    setVisible: (v: boolean) => void;
    user: User;
    talks: Talk[];
}

const ChatArea = styled.div`
    position: absolute;
    height: 460px;
    width: 300px;
    padding: 20px;
    padding-top: 55px;
    bottom: -34px;
    right: 16px;
    margin: 0;

    background-color: ${ ({color}: IChatArea) => color };

    transition: transform .5s ease-in-out;
    transform: translate(0,-50px);

    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 8px; 
    border-bottom-right-radius: 8px;

    display: ${ ({ visible }: IChatArea) => (visible) ? 'block': 'none' };

    ${shadow}

    @media (max-width: 328px) {
        height: 100%;
        width: 100%;
    }
`;


const Chat = ({ visible, user, talks }: IChat) => {
    const [content, setContent] = useState(<></>);

    const { colors } = useTheme();

    const effect = useCallback( () => {
        if (user.email === "" && user.name === "") {
            setContent(<ChatInit/>)
        }
        else if (talks.length === 0) {
            setContent(<SwitchInit/>)
        }
        else {
            setContent(<Talk/>)
        }
    }, [user, talks, setContent])

    useEffect( () => {
        effect();
    }, [effect])

    return (
        <ChatArea color={ colors.backgroundSecodary } visible={visible}>
            { content }
        </ChatArea>
    );
}

export default Chat;