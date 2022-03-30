import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
import styled from 'styled-components';
import logo from './../assets/images/logo.svg';

export default function TelaCadastro() {
    const navigate = useNavigate();
    const [dados, setDados] = useState({
        email: '',
        password: '',
        nome: '',
        foto: ''
    });

    function enviarDados() {
        console.log(dados);
        navigate('/');
    }

    return (
        <Container>
            <Logo src={logo} alt='logo'></Logo>

            <Imput type='email' required placeholder='email'  value={dados.email} onChange={e => setDados({...dados, email: e.target.value})}></Imput>
            <Imput type='password' required placeholder='senha' value={dados.password} onChange={e => setDados({...dados, password: e.target.value})}></Imput>
            <Imput type='tex' required placeholder='nome' value={dados.nome} onChange={e => setDados({...dados, nome: e.target.value})}></Imput>
            <Imput type='url' required placeholder='foto' value={dados.foto} onChange={e => setDados({...dados, foto: e.target.value})}></Imput>
            
            <Button onClick={() => enviarDados()}>Cadastrar</Button>
            
            <Entrar onClick={() => navigate('/')}>Já tem uma conta? Faça login!</Entrar>
        </Container>
    );
}

const Container = styled.div `
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FFFFFF;
`;

const Logo = styled.img `
    width: 180px;
    height: 180px;
    margin-top: 68px;
    margin-bottom: 32px;
`;

const Imput = styled.input `
    width: 303px;
    height: 45px;
    padding: 10px;
    margin-bottom: 6px;
    border-radius: 5px;
    border: 1px solid #D5D5D5;
    background: #FFFFFF;

    ::placeholder {
        color: #DBDBDB;
    }
`;

const Button = styled.button `
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

const Entrar = styled.div `
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