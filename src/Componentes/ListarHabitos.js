import styled from 'styled-components';
import { FaPlus } from "react-icons/fa";

export default function ListarHabitos({ habitos }) {
    const diaSemana = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    return (
        <Container>
            <Nav>
                <H1>Meus hábitos</H1>
                <Icon><FaPlus /></Icon>
            </Nav>
            <Habito>
                <Input placeholder='nome do hábito'></Input>
                <Selecao>
                    {diaSemana.map((dia, id) => {
                        return <Dias key={id} ></Dias>
                    })}
                </Selecao>
            </Habito>
        </Container>
    );
}

const Container = styled.div`
    font-family: 'Lexend Deca';
`;

const Nav = styled.div`
    display: flex;
`;

const H1 = styled.h1`
    top: 98px; 
    left: 18px;
    font-size: 23px;
    position: absolute;
    color: #126BA5;
`;

const Icon = styled.div`
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

const Habito = styled.div`
    margin: 0 18px;
    margin-top: 20px;
    min-width: 340px;
    height: 180px;
    border-radius: 5px;
    position: relative;
    background: #FFFFFF;
`;

const Input = styled.input`
    left: 18px;
    top: 18px;
    right: 18px;
    height: 45px;
    padding: 10px;
    border-radius: 5px;
    position: absolute;
    border: 1px solid #D5D5D5;
    background: #FFFFFF;

    ::placeholder {
        font-size: 20px;
        color: #DBDBDB;
    }
`;

const Selecao = styled.div`
    top: 71px; 
    left: 18px;
    width: 245px;
    position: absolute;
    display: flex;
    justify-content: space-between;
`;

const Dias = styled.div`
    width: 30px;
    height: 30px;
    font-size: 20px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #D5D5D5;
    
    :hover {
        cursor: pointer;
    }
`;

/* 
color: ${({ selecionados, dia }) => cor(selecionados, dia)}; 
background-color: ${({ selecionados, dia }) => back(selecionados, dia)};
*/