import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    max-width: 80vw;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`

export const Wrapper = styled.div`
    max-width:500px;
    margin: auto;
`

export const Column = styled.div`
    flex: 1;
`

export const Row = styled.div`
    font-family: 'Open Sans';  
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.2rem;
    margin-top: 20px;
    font-size: 14px;
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    max-width: 90%;
    margin-bottom: 20px;
    line-height: 44px;
    color: #FFFFFF;
`

export const TitleRegister = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
    margin-bottom: 8px;
`

export const SubtitleRegister = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 35px;
`

export const TermosText  = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 14px;
    line-height: 19px;
    max-width: 350px;
    margin-top: 20px;
    color: #fff;
` 

export const ContaText =  styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
`