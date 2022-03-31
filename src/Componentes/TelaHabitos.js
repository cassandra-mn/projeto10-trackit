import { useState, useContext, useEffect } from 'react';
import UserContext from '../contexts/UserContext';
import AdicionarHabito from './AdicionarHabito';
import ListarHabitos from './ListarHabitos';
import styled from 'styled-components';
import axios from 'axios';
import { FaPlus } from "react-icons/fa";

export default function TelaHabitos() {
    const { setVisivel } = useContext(UserContext);
    const pegarDados = localStorage.getItem("dados");
    const novosDados = JSON.parse(pegarDados);
    setVisivel(true);

    const [adicionar, setAdicionar] = useState(false);
    const [habitos, setHabitos] = useState();
    const [ok, setOk] = useState(false);

    useEffect(() => {
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';
        const config = {
            headers: {
                Authorization: `Bearer ${novosDados.token}`
            }
        }
        const promise = axios.get(URL, config);
        promise.then(response => {
            setHabitos(response.data);
            setOk(true);
        }).catch(error => console.log(error.response));
    }, []);

    return !adicionar ? (
        ok ? ( 
        <Container>
            <Nav>
                <H1>Meus hábitos</H1>
                <Icon onClick={() => setAdicionar(true)}><FaPlus /></Icon>
            </Nav>

            {habitos.length === 0 ? (
                <Texto>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </Texto>
                ) : <ListarHabitos habitos={habitos}/>
            }
        </Container>
        ) : <h1>Carregando...</h1>
    ) :
    <AdicionarHabito />
}

const Container = styled.div`
    font-family: 'Lexend Deca';
    margin-bottom: 100px;
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

const Texto = styled.p`
    margin-top: 28px;
    left: 18px;
    right: 20px;
    font-size: 18px;
    line-height: 22px;
    position: absolute;
    color: #666666;
`;