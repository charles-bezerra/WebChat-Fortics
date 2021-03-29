import styled from "styled-components";

const Col = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: auto;
    margin: 4px;

    @media (min-width: 768px) {
        width: ${({ width }: { width?: string }) => width ? width : 'auto'};
    }
`

export default Col;