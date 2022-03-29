import TelaHabitos from './TelaHabitos';
import { useState } from 'react';
import styled from 'styled-components';
import { FaPlus } from "react-icons/fa";

export default function AdicionarHabito({mudarStatus}) {
    const [cancelar, setCancelar] = useState(false);
    const [selecionados, setSelecionados] = useState([]);
    const diaSemana = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    function selecionar(id) {
        const jaSelecionado = selecionados.some(selecionado => selecionado === id);
        if (!jaSelecionado) setSelecionados([...selecionados, id]);
        else {
            const novosDias = selecionados.filter(selecionado => selecionado !== id);
            setSelecionados(novosDias);
        }
    }

    return !cancelar ? (
        <Container>
            <Nav>
                <H1>Meus hábitos</H1>
                <Icon><FaPlus /></Icon>
            </Nav>
            <Habito>
                <Input placeholder='nome do hábito'></Input>
                <Selecao>
                    {diaSemana.map((dia, id) => {
                        return <Dias key={id} selecionados={selecionados} dia={id} onClick={() => selecionar(id)}>{dia}</Dias>
                    })}
                </Selecao>
                <Cancelar onClick={() => setCancelar(true)}>Cancelar</Cancelar>
                <Salvar>Salvar</Salvar>
            </Habito>
            <Texto>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </Texto>
        </Container>
    ) : <TelaHabitos mudarStatus={mudarStatus}/>;
}

function back(selecionados, id) {
    const jaSelecionado = selecionados.some(selecionado => selecionado === id);
    return jaSelecionado ? '#CFCFCF' : '#FFFFFF'
}

function cor(selecionados, id) {
    const jaSelecionado = selecionados.some(selecionado => selecionado === id);
    return jaSelecionado ? '#FFFFFF' : '#CFCFCF'
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
    margin-top: 77px;
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
    color: ${({selecionados, dia}) => cor(selecionados, dia)};
    background-color: ${({selecionados, dia}) => back(selecionados, dia)};
    
    :hover {
        cursor: pointer;
    }
`;

const Cancelar = styled.div`
    right: 123px;
    bottom: 23px;
    font-size: 16px;
    position: absolute;
    color: #52B6FF;
    
    :hover {
        cursor: pointer 
    }
`;

const Salvar = styled.div`
    right: 15px;
    bottom: 15px;
    width: 84px;
    height: 35px;
    font-size: 16px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    color: #FFFFFF;
    background: #52B6FF;

    :hover {
        cursor: pointer 
    }
`;

const Texto = styled.p`
    margin: 0 18px;
    margin-top: 30px;
    left: 18px;
    right: 20px;
    font-size: 18px;
    line-height: 22px;
    color: #666666;
`;