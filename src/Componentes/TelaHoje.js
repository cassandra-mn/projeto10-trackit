import { useState, useContext, useEffect } from 'react';
import { FaCheckSquare } from 'react-icons/fa';
import UserContext from '../contexts/UserContext';
import HabitesContext from '../contexts/HabitesContext';
import ProgressContext from '../contexts/ProgressContext';
import Loading from './Loading';
import styled from 'styled-components';
import axios from 'axios';

export default function TelaHoje() {
    const dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const { setVisivel } = useContext(UserContext);
    const { progresso, setProgresso } = useContext(ProgressContext);
    const { habitos, setHabitos } = useContext(HabitesContext);
    const [ok, setOk] = useState(false);
    const pegarDados = localStorage.getItem("dados");
    const novosDados = JSON.parse(pegarDados);
    const dayjs = require("dayjs");
    setVisivel(true);

    useEffect(() => {
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today';
        const config = {
            headers: {
                Authorization: `Bearer ${novosDados.token}`
            }
        }
        const promise = axios.get(URL, config);
        promise.then(response => {
            setHabitos(response.data);
            setProgresso(response.data.filter(response => response.done));
            setOk(true);
        }).catch(error => console.log(error.response));
    }, []);

    function mudarStatus(id, done) {
        if (done) {
            const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`;
            const config = {
                headers: {
                    Authorization: `Bearer ${novosDados.token}`
                }
            }
            const promise = axios.post(URL, { id }, config);
            promise.then(response => window.location.reload())
                .catch(error => console.log(error.response));
        }
        else {
            const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;
            const config = {
                headers: {
                    Authorization: `Bearer ${novosDados.token}`
                }
            }
            const promise = axios.post(URL, { id }, config);
            promise.then(response => window.location.reload())
                .catch(error => console.log(error.response));
        }
    }

    return ok ? (
        <Container>
            <Header>
                <H1>{dias[dayjs().day()]}, {dayjs().format('DD/MM')}</H1>
                {progresso.length > 0 ?
                    <Small>{(progresso.length / habitos.length * 100).toFixed(0)}% dos hábitos concluídos</Small>
                    : <H3>Nenhum hábito concluído ainda</H3>
                }
            </Header>
            {habitos.map(habito => {
                const { id, name, done, currentSequence, highestSequence } = habito;
                
                return currentSequence === highestSequence ? (
                    <Habitos key={id}>
                        <H2>{name}</H2>
                        <P>Sequência atual: <Strong>{currentSequence} dias</Strong></P>
                        <P>Seu recorde: <Strong>{highestSequence} dias</Strong></P>
                        <Concluir onClick={() => mudarStatus(id, done)} cor={done ? '#8FC549' : '#EBEBEB'}><FaCheckSquare /></Concluir>
                    </Habitos>
                ) : (
                    <Habitos key={id}>
                        <H2>{name}</H2>
                        <P>Sequência atual: {currentSequence} dias</P>
                        <P>Seu recorde: {highestSequence} dias</P>
                        <Concluir onClick={() => mudarStatus(id, done)} cor={done ? '#8FC549' : '#EBEBEB'}><FaCheckSquare /></Concluir>
                    </Habitos>
                );
            })}
        </Container>
    ) : <Loading />
}

const Container = styled.div`
    font-family: 'Lexend Deca';
    margin-bottom: 100px;
`;

const Header = styled.div`
    font-family: 'Lexend Deca';
    padding: 0 18px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const H1 = styled.h1`
    margin-top: 28px; 
    font-size: 23px;
    line-height: 29px;
    color: #126BA5;
`;

const H3 = styled.h3`
    font-size: 18px;
    line-height: 22px;
    color: #BABABA;
`;

const Small = styled.p`
    font-size: 18px;
    line-height: 22px;
    color: #8FC549;
`;

const Habitos = styled.div`
    min-width: 340px;
    height: 94px;
    margin: 0 18px;
    margin-top: 20px;
    padding: 15px;
    border-radius: 5px;
    position: relative;
    background: #FFFFFF;
`;

const H2 = styled.h2`
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 7px;
    color: #666666;
`;

const P = styled.p`
    font-size: 13px;
    line-height: 16px;
    color: #666666;
`;

const Strong = styled.strong`
    color: #8FC549;
`;

const Concluir = styled.p`
    top: 10px;
    right: 10px;
    font-size: 69px;
    position: absolute;
    color: ${props => props.cor};

    :hover {
        cursor: pointer;
    }
`;