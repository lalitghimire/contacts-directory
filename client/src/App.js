import React from 'react';
import AddContactForm from './components/AddContactForm';
import ContactsList from './components/ContactsList';
import Header from './components/Header';

const App = () => {
    return (
        <div>
            <div>
                <Header />
            </div>{' '}
            <div>
                <AddContactForm />
                <ContactsList />
            </div>
        </div>
    );
};

export default App;
