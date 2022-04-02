import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../contexts/UserContext';
import HabitesContext from '../contexts/HabitesContext';
import ProgressContext from '../contexts/ProgressContext';
import 'react-circular-progressbar/dist/styles.css';
import styled from 'styled-components';

export default function Footer() {
    const { visivel } = useContext(UserContext);
    const { habitos } = useContext(HabitesContext);
    const { progresso } = useContext(ProgressContext);
    const navigate = useNavigate();

    return visivel ? (
        habitos !== undefined && progresso !== undefined ? (
        <Container>
            <Habitos onClick={() => navigate('/habitos')}>Hábitos</Habitos>
            <Hoje onClick={() => navigate('/hoje')}>
                Hoje
                <Progresso>
                    <CircularProgressbar value={progresso.length / habitos.length} maxValue={1} 
                    styles={buildStyles({pathColor:'#FFFFFF', trailColor: '#52B6FF'})}/>
                </Progresso>
            </Hoje>
            <Historico onClick={() => navigate('/historico')}>Histórico</Historico>
        </Container>
        ) : <></>
    ) : <></>;
}

const Container = styled.div`
    left: 0;
    bottom: 0;
    width: 100%;
    height: 70px;
    padding: 25px;
    z-index: 1;
    position: fixed;
    display: flex;
    justify-content: space-between;
    font-family: 'Lexend Deca';
    background-color: #FFFFFF;
`;

const Habitos = styled.p`
    font-size: 18px;
    color: #52b6ff;

    :hover {
        cursor: pointer;
    }
`;

const Hoje = styled.div`
    bottom: 10px;
    left: 40%;
    right: 40%;
    width: 91px;
    height: 91px;
    font-size: 18px;
    border-radius: 50%;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    color: #FFFFFF;
    background: #52B6FF;

    :hover {
        cursor: pointer;
    }
`;

const Progresso = styled.div`
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
`;

const Historico = styled.p`
    font-size: 18px;
    color: #52b6ff;

    :hover {
        cursor: pointer;
    }
`;