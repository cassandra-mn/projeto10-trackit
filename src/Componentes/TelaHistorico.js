import { useContext, useEffect, useState } from 'react';
import UserContext from '../contexts/UserContext';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import dayjs from 'dayjs';
import axios from 'axios';

export default function TelaHistorico() {
    const { setVisivel } = useContext(UserContext);
    const [diasComHabitos, setDiasComHabitos] = useState();
    const [escondido, setEscondido] = useState(true);
    const [conteudo, setConteudo] = useState('');
    const [habitos, setHabitos] = useState([]);
    const pegarDados = localStorage.getItem("dados");
    const novosDados = JSON.parse(pegarDados);
    setVisivel(true);

    useEffect(() => {
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily';
        const config = {
            headers: {
                Authorization: `Bearer ${novosDados.token}`
            }
        }
        const request = axios.get(URL, config);
        request.then(response => setDiasComHabitos(response.data))
            .catch(error => console.log(error.response));
    }, []);

    function classe({ date }) {
        if (diasComHabitos !== undefined) {
            const dataC = diasComHabitos.find(dia => dia.day == dayjs(date).format('DD/MM/YYYY'));
            if (dataC) {
                const teste = dataC.habits.filter(data => data.done);
                return teste.length === dataC.habits.length ? 'completo' : 'incompleto';
            }
        }
    }

    function imprimir(dia) {
        const teste = diasComHabitos.filter(d => d.day === dayjs(dia).format('DD/MM/YYYY'));
        setConteudo(`Hábitos do dia ${dayjs(dia).format('DD/MM/YYYY')}:`);
        setEscondido(false);
        if (teste.length > 0) {
            teste[0].habits.map(habito => setHabitos([...habitos, habito]));
        }
        else {
            setConteudo('Nenhum hábito neste dia');
        }
    }

    return (
        <Container>
            <H1>Histórico</H1>
            <Calendario><Calendar calendarType='US' onClickDay={dia => imprimir(dia)} tileClassName={classe} /></Calendario>
            <p className={escondido ? 'escondido' : ''}>{conteudo}</p>
        </Container>
    );
}

const Container = styled.div`
    font-family: 'Lexend Deca';
    margin-bottom: 100px;

    p {
        margin-left: 18px;
    }

    .escondido {
        display: none;
    }
`;

const H1 = styled.h1`
    margin-top: 28px; 
    margin-left: 18px;
    font-size: 23px;
    color: #126BA5;
`;

const Calendario = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px;

    .completo {
        min-width: 30px;
        min-height: 30px;
        border-radius: 50px;
        margin: auto;
        color: white;
        text-align: center;
        background-color: #8CC654;
    }

    .incompleto {
        min-width: 30px;
        min-height: 30px;
        border-radius: 50px;
        margin: auto;
        color: white;
        text-align: center;
        background-color: #ff0000b4;
    }
`;