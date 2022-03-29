import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from './../assets/images/logo.svg';

export default function TelaEntrar() {
    const navigate = useNavigate();

    return (
        <Container>
            <Logo src={logo} alt='logo'></Logo>

            <Imput type='email' required placeholder='email'></Imput>
            <Imput type='password' required placeholder='senha'></Imput>
            
            <Button onClick={() => navigate('/habitos')}>Entrar</Button>
            
            <Cadastrar onClick={() => navigate('/cadastro')}>Não tem uma conta? Cadastre-se!</Cadastrar>
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

const Cadastrar = styled.div `
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