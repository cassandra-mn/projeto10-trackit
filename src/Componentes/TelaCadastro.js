import { ThreeDots } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import logo from './../assets/images/logo.svg';

export default function TelaCadastro() {
    const navigate = useNavigate();
    const [disable, setDisable] = useState(false);
    const [dados, setDados] = useState({
        email: '',
        name: '',
        image: '',
        password: ''
    });

    function cadastrar() {
        setDisable(true);
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up';
        const request = axios.post(URL, dados);
        request.then(response => navigate('/'))
        .catch(error => {
            alert(error.response.data.message);
            setDisable(false);  
        });
    }

    return (
        <Container>
            <Logo src={logo} alt='logo'></Logo>

            <Imput cor={disable ? '#AFAFAF' : '#666666'} back={disable ? '#F2F2F2' : '#FFFFFF'} type='email' required placeholder='email'  value={dados.email} onChange={e => setDados({...dados, email: e.target.value})}></Imput>
            <Imput cor={disable ? '#AFAFAF' : '#666666'} back={disable ? '#F2F2F2' : '#FFFFFF'} type='password' required placeholder='senha' value={dados.password} onChange={e => setDados({...dados, password: e.target.value})}></Imput>
            <Imput cor={disable ? '#AFAFAF' : '#666666'} back={disable ? '#F2F2F2' : '#FFFFFF'} type='tex' required placeholder='nome' value={dados.name} onChange={e => setDados({...dados, name: e.target.value})}></Imput>
            <Imput cor={disable ? '#AFAFAF' : '#666666'} back={disable ? '#F2F2F2' : '#FFFFFF'} type='url' required placeholder='foto' value={dados.image} onChange={e => setDados({...dados, image: e.target.value})}></Imput>
            
            {disable ? 
            <ButtonDisable>
                <ThreeDots color='#FFFFFF' height={13} width={51}/>
            </ButtonDisable> 
            : <Button onClick={cadastrar}>Cadastrar</Button>}
            
            <Entrar onClick={() => navigate('/')}>J?? tem uma conta? Fa??a login!</Entrar>
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
    color: ${props => props.cor};
    background: ${props => props.back};

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

const ButtonDisable = styled.button`
    width: 303px;
    height: 45px;
    font-size: 20px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    color: #FFFFFF;
    background: #52B6FF;
    opacity: 0.7;
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