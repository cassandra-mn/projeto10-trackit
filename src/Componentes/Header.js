import styled from 'styled-components';
import foto from './../assets/images/foto.png';

export default function Header() {
    return (
        <Container>
            <H1>TrackIt</H1>
            <Imagem src={foto}></Imagem>
        </Container>
    );
}

const Container = styled.div `
    top: 0;
    min-width: 375px;
    height: 70px;
    position: sticky;
    display: flex;
    background-color: #126BA5;
`;

const H1 = styled.h1 `
    left: 18px;
    top: 10px;
    font-size: 40px;
    position: absolute;
    color: #FFFFFF;
    font-family: 'Playball';
`;

const Imagem = styled.img `
    top: 9px;
    right: 10px;
    width: 51px;
    height: 51px;
    position: absolute;
    border-radius: 98.5px;
`;