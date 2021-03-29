import styled from 'styled-components';
import { shadow } from '../../assets/styled-strings/index';
import useTheme from '../../hooks/useTheme';

const SIZE_BUTTON = "60px";

const FloatButtonCore = styled.button`
    border-width: 0;
    border-radius: 100%;
    background-color: ${({color}: {color: string}) => color};
    height: ${SIZE_BUTTON};
    width: ${SIZE_BUTTON};
    max-height: ${SIZE_BUTTON};
    max-width: ${SIZE_BUTTON};
    
    ${shadow}
    
    &:hover {
        opacity: 0.8;
    }

    &:focus {
        outline: none;
    }
`;

const FloatButton = ({ children, ...rest }: any) => {
    const { colors } = useTheme();

    return (
        <FloatButtonCore {...rest} color={colors.secondaryColor}>
            { children }
        </FloatButtonCore>
    );
};

export default FloatButton;