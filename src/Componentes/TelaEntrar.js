import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { ThreeDots } from 'react-loader-spinner';
import logo from './../assets/images/logo.svg';

export default function TelaEntrar() {
    const navigate = useNavigate();
    const [dados, setDados] = useState({
        email: '',
        password: ''
    });
    const [disable, setDisable] = useState(false);

    function entrar() {
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login';
        const request = axios.post(URL, dados);
        setDisable(true);
        request.then(response => {
            const dadosSerializados = JSON.stringify(response.data);
            localStorage.setItem("dados", dadosSerializados);
            navigate('/hoje');
        })
        .catch(error => { 
            alert(error.response.data.message);
            setDisable(false);
        });
    }

    return (
        <Container>
            <Logo src={logo} alt='logo'></Logo>

            <Imput cor={disable ? '#AFAFAF' : '#666666'} back={disable ? '#F2F2F2' : '#FFFFFF'} type='email' required placeholder='email' value={dados.email} onChange={e => setDados({ ...dados, email: e.target.value })}></Imput>
            <Imput cor={disable ? '#AFAFAF' : '#666666'} back={disable ? '#F2F2F2' : '#FFFFFF'} type='password' required placeholder='senha' value={dados.password} onChange={e => setDados({ ...dados, password: e.target.value })}></Imput>

            {disable ? 
            <ButtonDisable>
                <ThreeDots color='#FFFFFF' height={13} width={51}/>
            </ButtonDisable> 
            : <Button onClick={entrar}>Entrar</Button>}

            <Cadastrar onClick={() => navigate('/cadastro')}>Não tem uma conta? Cadastre-se!</Cadastrar>
        </Container>
    );
}

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FFFFFF;
`;

const Logo = styled.img`
    width: 180px;
    height: 180px;
    margin-top: 68px;
    margin-bottom: 32px;
`;

const Imput = styled.input`
    width: 303px;
    height: 45px;
    padding: 10px;
    margin-bottom: 6px;
    border-radius: 5px;
    border: 1px solid #D5D5D5;
    color: ${props => props.cor};
    background: ${props => props.back};

    ::placeholder {
        color: #DBDBDB;
    }
`;

const Button = styled.button`
    width: 303px;
    height: 45px;
    font-size: 20px;
    border-radius: 5px;
    text-align: center;
    border: none;
    color: #FFFFFF;
    background: #52B6FF;

    :hover {
        cursor: pointer;
    }
`

const ButtonDisable = styled.button`
    width: 303px;
    height: 45px;
    font-size: 20px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* text-align: center; */
    border: none;
    color: #FFFFFF;
    background: #52B6FF;
    opacity: 0.7;
`

const Cadastrar = styled.div`
    width: 232px;
    height: 17px;
    font-size: 13px;
    margin-top: 25px;
    text-align: center;
    font-family: 'Lexend Deca';
    text-decoration-line: underline;
    color: #52B6FF;

    :hover {
        cursor: pointer;
    }
`