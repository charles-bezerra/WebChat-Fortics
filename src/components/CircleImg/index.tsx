import styled from 'styled-components';

const CircleImgBase = styled.img`
    position: relative;
    height: 80px;
    width: 80px;
    padding: 0;
    margin: 0;
`

const CircleImgWrap = styled.div`
    position: relative;
    height: 80px;
    width: 80px;
    padding: 0;
    margin: 0;
    border-radius: 70px;
    overflow: hidden;
`

const CircleImg = (props: any) => (
    <CircleImgWrap>
        <CircleImgBase {...props}/>
    </CircleImgWrap>
);

export default CircleImg;