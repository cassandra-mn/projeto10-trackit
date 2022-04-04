import styled from 'styled-components';
import { BallTriangle } from 'react-loader-spinner';

export default function Loading() {
    return (
        <Container>
            <BallTriangle color='#FFFFFF'/>
        </Container>
    );
}

const Container = styled.div`
    width: 100vw;
    height: calc(100vh - 140px);
    display: flex;
    align-items: center;
    justify-content: center;
`;