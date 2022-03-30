import { useState, useContext } from 'react';
import UserContext from '../contexts/UserContext';
import styled from 'styled-components';
import { FaPlus } from "react-icons/fa";
import AdicionarHabito from './AdicionarHabito';

export default function TelaHabitos() {
    const [adicionar, setAdicionar] = useState(false);
    const { visivel, setVisivel } = useContext(UserContext);
    setVisivel(true);

    // Se já tiver hábitos, mostrar os hábitos, se não mostrar o texto

    return !adicionar ? (
        <Container>
            <Nav>
                <H1>Meus hábitos</H1>
                <Icon onClick={() => setAdicionar(true)}><FaPlus /></Icon>
            </Nav>
            <Texto>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </Texto>
        </Container>
    ) : <AdicionarHabito />;
}

const Container = styled.div`
    font-family: 'Lexend Deca';
`;

const Nav = styled.div`
    font-family: 'Lexend Deca';
    padding: 0 18px;
    display: flex;
    justify-content: space-between;
`;

const H1 = styled.h1`
    margin-top: 28px; 
    font-size: 23px;
    color: #126BA5;
`;

const Icon = styled.div`
    margin-top: 21px;
    width: 40px;
    height: 35px;
    font-size: 27px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    background: #52B6FF;

    :hover {
        cursor: pointer;
    }
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