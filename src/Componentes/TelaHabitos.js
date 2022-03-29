import styled from 'styled-components';
import { FaPlus } from "react-icons/fa";

export default function TelaHabitos() {
    return (
        <Container>
            <Nav>
                <H1>Meus hábitos</H1>
                <Icon><FaPlus /></Icon>
            </Nav>
            <Texto>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </Texto>
        </Container>
    );
}

const Container = styled.div `
    font-family: 'Lexend Deca';
`;

const Nav = styled.div `
    display: flex;
`;

const H1 = styled.h1 `
    top: 98px; 
    left: 18px;
    font-size: 23px;
    position: absolute;
    color: #126BA5;
`;

const Icon = styled.div `
    top: 92px;
    right: 18px;
    width: 40px;
    height: 35px;
    font-size: 27px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    color: #FFFFFF;
    background: #52B6FF;

    :hover {
        cursor: pointer;
    }
`;

const Texto = styled.p `
    top: 155px;
    left: 18px;
    right: 20px;
    font-size: 18px;
    line-height: 22px;
    position: absolute;
    color: #666666;
`;