import {BrowserRouter, Routes, Route} from 'react-router-dom';
import TelaEntrar from './TelaEntrar';
import TelaCadastro from './TelaCadastro';

export default function App() {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TelaEntrar />} />
                <Route path="/cadastro" element={<TelaCadastro />} />
            </Routes>
        </BrowserRouter>
        </>
    );
} 