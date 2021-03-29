import { ReactNode } from 'react';
import styled from 'styled-components';
import useTheme from '../../hooks/useTheme';

const BarChat: any = {};

const BarChatBase = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    width: 100%;
    border-radius: 20px 20px 0 0;
    height: 55px;
    padding: 0px 8px;
    display: flex;
    align-items: center;
`;

const BarChatParent = styled(BarChatBase)`
    background-color: ${({ color }: Color) => color};
`;

const Primary = ({ children }: { children: ReactNode }) => {
    const { colors } = useTheme();

    return (
        <BarChatParent color={colors.backgroundSecodary}>
            { children }
        </BarChatParent>
    );
}

const Secondary = ({ children }: { children: ReactNode }) => {
    const { colors } = useTheme();

    return (
        <BarChatParent color={colors.secondaryColor}>
            { children }
        </BarChatParent>
    );
}

BarChat.Primary = Primary;
BarChat.Secondary = Secondary;

export default BarChat;