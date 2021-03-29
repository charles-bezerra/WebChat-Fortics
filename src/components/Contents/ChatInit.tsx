import { ChangeEvent, FormEvent, useReducer } from 'react';
import styled from 'styled-components';
import { INITIAL_USER } from '../../constants';
import useApp from '../../hooks/useApp';
import useTheme from '../../hooks/useTheme';
import userReducer from '../../reducers/userReducer';
import BarChat from '../BarChat';

import Button from '../Button';
import ButtonClose from '../ButtonClose';
import Center from '../Center';
import CircleImg from '../CircleImg';
import Col from '../Col';
import Input from '../Input';
import Row from '../Row';
import VPadding from '../VPadding';

const Text = styled.p`
    text-align: center;
    font-size: 20px;
    color: #a7a7a7;
    font-weight: 500;
`

const ChatInit = () => {
    const { colors } = useTheme();
    const { userDispatch: userDispatchApp, setVisibleChat } = useApp();

    const [user, userDispatch] = useReducer(userReducer, INITIAL_USER);

    const submit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        userDispatchApp({type: 'SET', payload: {user}})
    }

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        userDispatch({type: 'CHANGE', payload: {field: name, value}});
    }

    return (
    <>
        <BarChat.Primary>
            <Row reverse>
                <ButtonClose size="large" onClick={() => setVisibleChat(false)}/>
            </Row>
        </BarChat.Primary>

        <Col width="100%">
            <Center>
                <VPadding>
                    <CircleImg src="/person-image.jpg" />
                </VPadding>
            </Center>
            
            <Center>
                    <Text>
                        Precisamos de algumas informção antes de iniciar o atendimento
                    </Text>
            </Center>
        </Col>

        <form onSubmit={submit}>
            <VPadding>
                <Input 
                    name="name"
                    value={user.name} 
                    type="text" 
                    onChange={onChange}
                    placeholder="Nome" 
                    required/>
            </VPadding>

            <VPadding>
                <Input 
                    value={user.email}
                    name="email" 
                    type="email" 
                    onChange={onChange}
                    placeholder="E-mail" 
                    required/>
            </VPadding>

            <VPadding>
                <Button typeof="submit" color={colors.secondaryColor}>Iniciar</Button>
            </VPadding>
        </form>
    </>
    );
}

export default ChatInit;