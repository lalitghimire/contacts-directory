import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import { Container } from '@mui/material';
import Contacts from './pages/Contacts';

const App = () => {
    return (
        <Container>
            <Header />
            <ToastContainer position='top-center' />
            <Routes>
                <Route path='/' element={<Contacts />} />
            </Routes>
        </Container>
    );
};

export default App;
