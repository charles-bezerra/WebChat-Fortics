import styled from "styled-components";
import ButtonClose from "../ButtonClose";
import Row from "../Row";

const TooltipCore = styled.div`
    border-radius: 50px;
    margin-right: 4px;
    background-color: white;
    border-bottom-right-radius: 16px;
    height: 40px;
    width: auto;
    padding: 6px;
    display: ${ ({visible}: {visible: boolean}) => visible ? 'flex' : 'none' };

    transition: 3ms all;

`;

const Text = styled.div`
    height: 100%;
    display: flex;
    margin-left: 4px;
    justify-content: center;
    align-content: center;
    align-items: center;

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
                <Text>
                    {text}
                </Text>

                <ButtonClose size="small" onClick={onClose}/>
            </Row>
        </TooltipCore>
    )
}

export default Tooltip;