import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useState} from 'react';
import UserContext from './../contexts/UserContext';
import TelaEntrar from './TelaEntrar';
import TelaCadastro from './TelaCadastro';
import TelaHabitos from './TelaHabitos';
import Header from './Header';
import Footer from './Footer';

export default function App() {
    const [visivel, setVisivel] = useState(false);

    return (
        <UserContext.Provider value={{visivel, setVisivel}}>
        <BrowserRouter>
            <Header/>
            <Footer/>
            <Routes>
                <Route path="/" element={<TelaEntrar/>} />
                <Route path="/cadastro" element={<TelaCadastro />} />
                <Route path="/habitos" element={<TelaHabitos />} />
            </Routes>
        </BrowserRouter>
        </UserContext.Provider>
    );
} 