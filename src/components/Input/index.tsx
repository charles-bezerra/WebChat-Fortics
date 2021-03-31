import styled from 'styled-components';

const Input = styled.input`
    height: 35px;
    width: 100%;
    
    box-sizing: border-box;

    display: flex;
    align-items: center;

    padding: 0px 16px;

    font-size: 14px;
    font-weight: 300;
    
    border: 0;
    border-radius: 40px;
    background-color: white;

    &:focus {
        outline: none;  
    }
`

export default Input;