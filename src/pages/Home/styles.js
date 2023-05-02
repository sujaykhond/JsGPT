import styled from 'styled-components/macro';

export const StyledHome = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    background: ${(props) => props.theme.layoutBg};
`;

export const LeftContainer = styled.section`
    width: 20%;
    border-radius: 0px 36px 36px 0px;
    background: ${(props) => props.theme.navbg};
    padding: 45px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 1200px) {
        padding: 45px 25px;
        width: 25%;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const RightContainer = styled.section`
    padding: 45px 50px;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 0 0 20px 0;
    }
`;
