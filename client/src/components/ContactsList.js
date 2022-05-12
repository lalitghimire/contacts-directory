import React from 'react';
import { useSelector } from 'react-redux';

const ContactsList = () => {
    const contacts = useSelector((state) => state.contactsReducer.contacts);
    console.log('contacts', contacts);
    return (
        <div>
            <p>hello</p>
            {contacts.map((person) => (
                <p key={person.name}>
                    {person.name}
                    {person.email} {person.address}{' '}
                </p>
            ))}
        </div>
    );
};

export default ContactsList;
