import { ReactNode } from 'react';
import styled from 'styled-components';

//hooks
import useTheme from '../../hooks/useTheme';

//Components
import Navbar from '../Navbar';

const Content = styled.div`
    margin: 0;
    padding: 16px;
    padding-top: 86px;
    height: 100vh;
    box-sizing: border-box;
    background-color: ${ (props: Color) => props.color };
`

const Page = ({ children }: { children: ReactNode }) => {
    const { colors  } = useTheme();

    return (
        <Content color={colors.backgroundPrimary}>
            <Navbar/>

            { children }
        </Content>
    )
}

export default Page;