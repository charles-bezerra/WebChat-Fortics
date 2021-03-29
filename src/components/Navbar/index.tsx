import styled from 'styled-components';

//hooks
import useTheme from '../../hooks/useTheme';

//styles
import { shadow } from '../../assets/styled-strings';

const Bar = styled.div`
    position: fixed;
    padding: 0;
    margin: 0;
    left: 0;
    top: 0;
    min-width: 100vw;
    min-height: 70px;
    background-color: ${ (props: { color: string }) => props.color };
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;

    ${shadow}
`

const Img = styled.img`
    width: auto;
    height: 70px;
`


const Navbar = () => {
    const { colors  } = useTheme();

    return (
        <Bar color={colors.primaryColor}>
            <Img src="/logo.png" alt="Logo da empresa"/>
        </Bar>
    )
};

export default Navbar;