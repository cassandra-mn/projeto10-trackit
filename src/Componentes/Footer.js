import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import styled from 'styled-components';

export default function Footer() {
    const {visivel} = useContext(UserContext);
    const navigate = useNavigate();

    return visivel ? (
        <Container>
            <Habitos onClick={() => navigate('/habitos')}>Hábitos</Habitos>
            <Hoje onClick={() => navigate('/hoje')}>Hoje</Hoje>
            <Historico onClick={() => navigate('/historico')}>Histórico</Historico>
        </Container>
    ) : <></>;
}

const Container = styled.div `
    left: 0;
    bottom: 0;
    width: 100%;
    height: 70px;
    padding: 25px;
    z-index: 1;
    position: fixed;
    display: flex;
    justify-content: space-between;
    font-family: 'Lexend Deca';
    background-color: #FFFFFF;
`;

const Habitos = styled.p `
    font-size: 18px;
    color: #52b6ff;

    :hover {
        cursor: pointer;
    }
`;

const Hoje = styled.div `
    bottom: 10px;
    left: 40%;
    right: 40%;
    width: 91px;
    height: 91px;
    font-size: 18px;
    border-radius: 50%;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    color: #FFFFFF;
    background: #52B6FF;

    :hover {
        cursor: pointer;
    }
`;

const Historico = styled.p `
    font-size: 18px;
    color: #52b6ff;

    :hover {
        cursor: pointer;
    }
`;