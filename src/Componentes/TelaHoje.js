import { useState, useContext } from 'react';
import UserContext from '../contexts/UserContext';
import styled from 'styled-components';
import { FaCheckSquare } from 'react-icons/fa';

export default function TelaHoje() {
    const dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const {setVisivel} = useContext(UserContext);
    const [concluidos, setConcluidos] = useState(false);
    const [select, setSelect] = useState(false);
    const dayjs = require("dayjs");
    setVisivel(true);
    
    function mudarStatus() {
        setSelect(!select);
        setConcluidos(!concluidos);
    }

    return (
        <Container>
            <Header>
                <H1>{dias[dayjs().day()]}, {dayjs().format('DD/MM')}</H1>
                {concluidos ?
                    <Small>67% dos hábitos concluídos</Small>
                :   <H3>Nenhum hábito concluído ainda</H3>
                }
            </Header>
            <Habitos>
                <H2>Ler 1 capítulo de livro</H2>
                <P>Sequência atual: 3 dias</P>
                <P>Seu recorde: 5 dias</P>
                <Concluir onClick={mudarStatus} cor={select ? '#8FC549' : '#EBEBEB'}><FaCheckSquare /></Concluir>
            </Habitos>
        </Container>
    );
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