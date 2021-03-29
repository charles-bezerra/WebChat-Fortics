import styled from "styled-components";

const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: ${ ({reverse}: {reverse?: boolean}) => reverse ? 'row-reverse' : 'row'};
    flex-wrap: wrap;
`;

export default Row;