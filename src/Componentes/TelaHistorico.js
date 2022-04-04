import { useContext, useEffect, useState } from 'react';
import UserContext from '../contexts/UserContext';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import dayjs from 'dayjs';
import axios from 'axios';

export default function TelaHistorico() {
    const { setVisivel } = useContext(UserContext);
    const [diasComHabitos, setDiasComHabitos] = useState();
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
                const teste = dataC.habits.find(data => data.done);
                return teste ? 'completo' : 'incompleto';
            }
        }
    }

    return (
        <Container>
            <H1>Histórico</H1>
            <Calendario><Calendar calendarType='US' tileClassName={classe} /></Calendario>
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

const Calendario = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px;

    .completo {
        border-radius: 50%;
        background-color: #32CD32;
    }

    .incompleto {
        border-radius: 50%;
        background-color: #DC143C;
    }
`;