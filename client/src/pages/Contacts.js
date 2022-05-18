import React from 'react';
import { useState } from 'react';
import ContactForm from '../components/ContactForm';
import ContactsList from '../components/ContactsList';

const Contacts = () => {
    const [openModal, setOpenModal] = useState(false);
    const [currentContactId, setCurrentContactId] = useState(0);

    const handleModalOpen = () => {
        setOpenModal(true);
    };
    const handleModalClose = () => {
        setOpenModal(false);
        setCurrentContactId(0);
    };

    return (
        <div>
            <ContactsList
                openModal={openModal}
                handleClose={handleModalClose}
                handleOpen={handleModalOpen}
                currentContactId={currentContactId}
                setCurrentContactId={setCurrentContactId}
            />

            <ContactForm
                openModal={openModal}
                handleClose={handleModalClose}
                currentContactId={currentContactId}
                setCurrentContactId={setCurrentContactId}
            />
        </div>
    );
};

export default Contacts;
