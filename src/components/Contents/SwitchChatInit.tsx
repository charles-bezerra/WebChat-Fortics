import useApp from '../../hooks/useApp';
import useTheme from '../../hooks/useTheme';

import BarChat from '../BarChat';
import ButtonClose from '../ButtonClose';
import Row from '../Row';

const SwitchChatInit = () => {
    const { colors } = useTheme();
    const { userDispatch, setVisibleChat } = useApp();

    return (
    <>
        <BarChat.Secondary>
            <Row reverse>
                <ButtonClose size="large" onClick={() => setVisibleChat(false)}/>
            </Row>
        </BarChat.Secondary>
    </>
    );
}


export default SwitchChatInit;