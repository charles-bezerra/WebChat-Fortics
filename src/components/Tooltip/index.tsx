import styled from "styled-components";
import ButtonClose from "../ButtonClose";
import Row from "../Row";
import Col from "../Col";

const TooltipCore = styled.div`
    border-radius: 50px;
    background-color: white;
    border-bottom-right-radius: 16px;
    height: 40px;
    width: auto;
    padding: 8px;
    display: ${ ({visible}: {visible: boolean}) => visible ? 'flex' : 'none' };

    transition: 3ms all;

`;


const Text = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-content: center;

    font-size: 12px;
    color: #7C7C7C;
    font-weight: 300;
    text-transform: uppercase;
`;


interface ITooltip { 
    visible: boolean, 
    setVisible: (arg: boolean) => void,
    text: string;
};


const Tooltip = ({ visible, setVisible, text }: ITooltip) => {

    const onClose = () => setVisible(false);

    return (
        <TooltipCore visible={visible}>
            <Row>
                <Col>
                    <Text>
                        {text}
                    </Text>
                </Col>

                <Col>
                    <ButtonClose onClick={onClose}/>
                </Col>
            </Row>
        </TooltipCore>
    )
}

export default Tooltip;