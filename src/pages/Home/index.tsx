import { useState } from 'react';
import { FaStream } from 'react-icons/fa';

import FloatButton from '../../components/FloatButton';
import Page from '../../components/Page';
import FloatArea from '../../components/FloatArea';
import Row from '../../components/Row';
import Col from '../../components/Col';
import Tooltip from '../../components/Tooltip';

const Home = () => {
    const [visibleTooltip, setVisibleTooltip] = useState<boolean>(true);

    return (
        <Page>
            <FloatArea>
                <Row reverse>
                    <Col>
                        <FloatButton>
                            <FaStream color="white" size={20}/>
                        </FloatButton>
                    </Col>
                    <Col>
                        <Tooltip text="Posso ajudar?" visible={visibleTooltip} setVisible={setVisibleTooltip}/>
                    </Col>
                </Row>
            </FloatArea>
        </Page>
    )
}

export default Home;