import { useContext } from 'react';
import UserContext from '../contexts/UserContext';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import dayjs from 'dayjs';

export default function TelaHistorico() {
    const {setVisivel} = useContext(UserContext);
    setVisivel(true);

    function classe({date, view}) {
        console.log(dayjs(date).format('DD/MM/YYYY'));
    }

    return (
        <Container>
            <H1>Histórico</H1>
            <Calendario><Calendar calendarType='US' tileClassName={classe}/></Calendario>
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
`;