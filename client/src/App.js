import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ContactForm from './components/ContactForm';
import ContactsList from './components/ContactsList';
import Header from './components/Header';
import { Container } from '@mui/material';

const App = () => {
    return (
        <Container>
            <div>
                <Header />
            </div>{' '}
            <Link to='/addcontact' className='btn btn-outline-dark my-5 ml-auto '>
                Add Contact
            </Link>{' '}
            <Link to='/' className='btn btn-outline-dark my-5 ml-auto '>
                Contact list
            </Link>{' '}
            <Link to='/editcontact' className='btn btn-outline-dark my-5 ml-auto '>
                edit contact
            </Link>
            <div>
                <Routes>
                    <Route path='/' element={<ContactsList />} />
                    <Route path='/addcontact' element={<ContactForm />} />
                    <Route path='/editcontact' element={<ContactForm />} />
                </Routes>
            </div>
        </Container>
    );
};

export default App;
