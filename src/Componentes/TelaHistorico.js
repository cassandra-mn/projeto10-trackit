import { useContext } from 'react';
import UserContext from '../contexts/UserContext';
import styled from 'styled-components';

export default function TelaHistorico() {
    const {setVisivel} = useContext(UserContext);
    setVisivel(true);

    return (
        <Container>
            <H1>Histórico</H1>
            <Texto>
                Em breve você poderá ver o histórico dos seus hábitos aqui!
            </Texto>
        </Container>
    );
}

const Container = styled.div`
    font-family: 'Lexend Deca';
    margin-bottom: 100px;
`;

const H1 = styled.h1`
    margin-top: 28px; 
    margin-left: 18px;
    font-size: 23px;
    color: #126BA5;
`;

const Texto = styled.p`
    margin-top: 28px;
    left: 18px;
    right: 20px;
    font-size: 18px;
    line-height: 22px;
    position: absolute;
    color: #666666;
`;