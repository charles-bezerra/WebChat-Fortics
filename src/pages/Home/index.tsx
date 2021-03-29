import { useState } from 'react';
import { FaStream } from 'react-icons/fa';

import FloatButton from '../../components/FloatButton';
import Page from '../../components/Page';
import FloatArea from '../../components/FloatArea';
import Row from '../../components/Row';
import Tooltip from '../../components/Tooltip';
import Chat from '../../components/Chat';
import useApp from '../../hooks/useApp';

const Home = () => {
    const [visibleTooltip, setVisibleTooltip] = useState<boolean>(true);
    const { visibleChat, setVisibleChat, user, talks } = useApp();

    return (
        <Page>            
            <FloatArea>
                <Row reverse>
                    <FloatButton onClick={ () => setVisibleChat(true) }>
                        <FaStream color="white" size={20}/>
                    </FloatButton>

                    <Tooltip 
                        text="Posso ajudar?" 
                        visible={visibleTooltip} 
                        setVisible={setVisibleTooltip}
                    />
                </Row>
            </FloatArea>
            
            <Chat 
                user={user}
                talks={talks}
                visible={visibleChat} 
                setVisible={setVisibleChat}/>
        </Page>
    )
}

export default Home;