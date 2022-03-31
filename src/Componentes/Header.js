import {useContext} from 'react';
import UserContext from '../contexts/UserContext';
import OtherContext from '../contexts/OtherContext';
import styled from 'styled-components';

export default function Header() {
    const {visivel} = useContext(UserContext);
    // const {dadosUsuario} = useContext(OtherContext);
    // const {image} = dadosUsuario;
    
    return visivel ? (
        <Container>
            <H1>TrackIt</H1>
            <Imagem src={""}></Imagem>
        </Container>
    ) : <></>;
}

const Container = styled.div `
    top: 0;
    min-width: 375px;
    height: 70px;
    z-index: 1;
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