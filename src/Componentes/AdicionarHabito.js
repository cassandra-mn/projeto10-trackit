import { useState, useContext } from 'react';
import OtherContext from './../contexts/OtherContext';
import TelaHabitos from './TelaHabitos';
import styled from 'styled-components';
import axios from 'axios';
import { FaPlus } from 'react-icons/fa';

export default function AdicionarHabito() {
    const { dadosUsuario, setDadosUsuario } = useContext(OtherContext);
    const token = localStorage.getItem('token');
    const [cancelar, setCancelar] = useState(false);
    const [novoHabito, setNovoHabito] = useState('');
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

    function criarHabito() {
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';
        const dados = { 
            name: novoHabito,
            days: selecionados
        }
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        setDadosUsuario({...dadosUsuario, dados});
        const request = axios.post(URL, dados, config);
        request.then(response => setCancelar(true))
        .catch(error => alert(error.response.data.message));
    }
    
    if (!cancelar) {
        return (
            <Container>
                <Nav>
                    <H1>Meus hábitos</H1>
                    <Icon><FaPlus /></Icon>
                </Nav>
                <Habito>
                    <Input placeholder='nome do hábito' required value={novoHabito} onChange={e => setNovoHabito(e.target.value)}></Input>
                    <Selecao>
                        {diaSemana.map((dia, id) => {
                            return <Dias key={id} selecionados={selecionados} dia={id} onClick={() => selecionar(id)}>{dia}</Dias>
                        })}
                    </Selecao>
                    <Cancelar onClick={() => setCancelar(true)}>Cancelar</Cancelar>
                    <Salvar onClick={criarHabito}>Salvar</Salvar>
                </Habito>
            </Container>
        );
    }
    else {
        return <TelaHabitos />;
    }
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
    color: ${({ selecionados, dia }) => cor(selecionados, dia)};
    background-color: ${({ selecionados, dia }) => back(selecionados, dia)};
    
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