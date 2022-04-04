import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useState} from 'react';
import UserContext from './../contexts/UserContext';
import OtherContext from './../contexts/OtherContext';
import HabitesContext from './../contexts/HabitesContext';
import ProgressContext from './../contexts/ProgressContext';
import TelaEntrar from './TelaEntrar';
import TelaCadastro from './TelaCadastro';
import TelaHoje from './TelaHoje';
import TelaHabitos from './TelaHabitos';
import TelaHistorico from './TelaHistorico';
import Loading from './Loading';
import Header from './Header';
import Footer from './Footer';
import 'react-calendar/dist/Calendar.css';

export default function App() {
    const [visivel, setVisivel] = useState(false);
    const [dadosUsuario, setDadosUsuario] = useState();
    const [progresso, setProgresso] = useState();
    const [habitos, setHabitos] = useState();

    return (
        <UserContext.Provider value={{visivel, setVisivel}}>
        <OtherContext.Provider value={{dadosUsuario, setDadosUsuario}}>
        <ProgressContext.Provider value={{progresso, setProgresso}}>
        <HabitesContext.Provider value={{habitos, setHabitos}}>
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
        </HabitesContext.Provider>
        </ProgressContext.Provider>
        </OtherContext.Provider>
        </UserContext.Provider>
    );
} 