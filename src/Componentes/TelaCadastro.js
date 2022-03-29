import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from './../assets/images/logo.svg';

export default function TelaCadastro() {
    const navigate = useNavigate();

    return (
        <Container>
            <Logo src={logo} alt='logo'></Logo>

            <Imput type='email' required placeholder='email'></Imput>
            <Imput type='password' required placeholder='senha'></Imput>
            <Imput type='tex' required placeholder='nome'></Imput>
            <Imput type='text' required placeholder='foto'></Imput>
            
            <Button>Cadastrar</Button>
            
            <Entrar onClick={() => navigate('/')}>Já tem uma conta? Faça login!</Entrar>
        </Container>
    );
}

const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
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