import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useState} from 'react';
import TelaEntrar from './TelaEntrar';
import TelaCadastro from './TelaCadastro';
import TelaHabitos from './TelaHabitos';
import Header from './Header';
import Footer from './Footer';

export default function App() {
    const [visivel, setVisivel] = useState(false);

    return (
        <>
        <BrowserRouter>
            <Header status={visivel}/>
            <Footer status={visivel}/>
            <Routes>
                <Route path="/" element={<TelaEntrar/>} />
                <Route path="/cadastro" element={<TelaCadastro />} />
                <Route path="/habitos" element={<TelaHabitos mudarStatus={status => setVisivel(status)}/>} />
            </Routes>
        </BrowserRouter>
        </>
    );
} 