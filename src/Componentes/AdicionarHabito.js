import { useState, useContext } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import OtherContext from './../contexts/OtherContext';
import styled from 'styled-components';
import axios from 'axios';

export default function AdicionarHabito({ status }) {
    const { dadosUsuario, setDadosUsuario } = useContext(OtherContext);
    const diaSemana = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    const pegarDados = localStorage.getItem("dados");
    const novosDados = JSON.parse(pegarDados);
    const [disable, setDisable] = useState(false);
    const [novoHabito, setNovoHabito] = useState('');
    const [selecionados, setSelecionados] = useState([]);

    function selecionar(id) {
        const jaSelecionado = selecionados.some(selecionado => selecionado === id);
        if (!jaSelecionado) setSelecionados([...selecionados, id]);
        else {
            const novosDias = selecionados.filter(selecionado => selecionado !== id);
            setSelecionados(novosDias);
        }
    }

    function criarHabito() {
        setDisable(true);
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';
        const dados = {
            name: novoHabito,
            days: selecionados
        }
        const config = {
            headers: {
                Authorization: `Bearer ${novosDados.token}`
            }
        }
        setDadosUsuario({ ...dadosUsuario, dados });
        const request = axios.post(URL, dados, config);
        request.then(response => window.location.reload())
            .catch(error => {
                alert(error.response.data.message);
                setDisable(false);
            });
    }

    return (
        <Container>
            <Habito>
                <Input cor={disable ? '#AFAFAF' : '#666666'} back={disable ? '#F2F2F2' : '#FFFFFF'} placeholder='nome do hábito' required value={novoHabito} onChange={e => setNovoHabito(e.target.value)}></Input>
                <Selecao>
                    {diaSemana.map((dia, id) => {
                        return <Dias key={id} selecionados={selecionados} dia={id} onClick={() => selecionar(id)}>{dia}</Dias>
                    })}
                </Selecao>
                <Cancelar onClick={() => status(false)}>Cancelar</Cancelar>
                {disable ?
                    <ButtonDisable>
                        <ThreeDots color='#FFFFFF' height={13} width={51} />
                    </ButtonDisable>
                    : <Salvar onClick={criarHabito}>Salvar</Salvar>}
            </Habito>
        </Container>
    );
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
    color: ${props => props.cor};
    background: ${props => props.back};

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

const ButtonDisable = styled.button`
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
    opacity: 0.7;
`;