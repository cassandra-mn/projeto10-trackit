import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useState} from 'react';
import UserContext from './../contexts/UserContext';
import OtherContext from './../contexts/OtherContext';
import TelaEntrar from './TelaEntrar';
import TelaCadastro from './TelaCadastro';
import TelaHoje from './TelaHoje';
import TelaHabitos from './TelaHabitos';
import TelaHistorico from './TelaHistorico';
import Header from './Header';
import Footer from './Footer';

export default function App() {
    const [visivel, setVisivel] = useState(false);
    const [dadosUsuario, setDadosUsuario] = useState();

    return (
        <UserContext.Provider value={{visivel, setVisivel}}>
        <OtherContext.Provider value={{dadosUsuario, setDadosUsuario}}>
        <BrowserRouter>
            <Header/>
            <Footer/>
            <Routes>
                <Route path="/" element={<TelaEntrar/>} />
                <Route path="/cadastro" element={<TelaCadastro />} />
                <Route path="/habitos" element={<TelaHabitos />} />
                <Route path="/hoje" element={<TelaHoje />} />
                <Route path="/historico" element={<TelaHistorico />} />
            </Routes>
        </BrowserRouter>
        </OtherContext.Provider>
        </UserContext.Provider>
    );
} 