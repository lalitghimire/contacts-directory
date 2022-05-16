import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from '../redux/contactSlice';

const ContactsList = () => {
    const contacts = useSelector((state) => state.contactsReducer.contacts);
    const dispatch = useDispatch();
    console.log('contacts', contacts);

    const handleDeleteContact = (id) => {
        dispatch(removeContact(id));
    };

    return (
        <div>
            {contacts.map((person) => (
                <p key={person.name}>
                    {person.name}
                    {person.email} {person.address}{' '}
                    <button onClick={() => handleDeleteContact(person.id)}> delete</button>
                    <button> edit </button>
                </p>
            ))}
        </div>
    );
};

export default ContactsList;
