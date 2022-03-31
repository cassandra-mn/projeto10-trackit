import styled from 'styled-components';
import { FaRegTrashAlt } from "react-icons/fa";

export default function ListarHabitos({ habitos }) {
    const diaSemana = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    return (
        <Container>
            {habitos.map(habito => {
                const { days, name } = habito;
                return (
                    <Habito key={habito}>
                        <P>{name}</P>
                        <Remover><FaRegTrashAlt /></Remover>
                        <Caixinhas>
                            {diaSemana.map((dia, id) => {
                                const select = days.some(day => day === id);
                                const back = select ? '#CFCFCF' : '#FFFFFF';
                                const cor = select ? '#FFFFFF' : '#CFCFCF';
                                return <Dias key={id} back={back} cor={cor}>{dia}</Dias>
                            })}
                        </Caixinhas>
                    </Habito>
                );
            })}
        </Container>
    );
}

const Container = styled.div`
    font-family: 'Lexend Deca';
`;

const Habito = styled.div`
    min-width: 340px;
    height: 91px;
    margin: 0 18px;
    margin-top: 20px;
    padding: 15px;
    border-radius: 5px;
    position: relative;
    background: #FFFFFF;
`;

const P = styled.p`
    font-size: 20px;
    color: #666666;
`;

const Remover = styled.p`
    top: 15px;
    right: 15px;
    font-size: 15px;
    position: absolute;
`;

const Caixinhas = styled.div`
    margin-top: 10px; 
    width: 245px;
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
    color: ${props => props.cor}; 
    background-color: ${props => props.back};
`;