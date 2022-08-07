import React, { useEffect } from 'react';

import {
    Button,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
} from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { removeContact, getAllcontacts } from '../redux/contactSlice';
import Filter from './Filter';

const ContactsList = ({ handleOpen, setCurrentContactId }) => {
    const { contacts, isLoading } = useSelector((state) => state.contactsReducer);
    const dispatch = useDispatch();
    console.log('contacts', contacts);

    useEffect(() => {
        dispatch(getAllcontacts());
    }, [dispatch]);

    const handleDeleteContact = (id) => {
        dispatch(removeContact(id));
    };

    const handleUpdateContact = (id) => {
        console.log('update button clicked', id);
        setCurrentContactId(id);
        handleOpen();
    };
    if (isLoading) {
        return <p> Contacts loading......</p>;
    }

    return (
        <div>
            <Button variant='outlined' style={{ fontSize: '18px' }} onClick={handleOpen}>
                {' '}
                Add Contact
            </Button>
            <Filter />
            <TableContainer sx={{ maxHeight: '800px' }} component={Paper}>
                <Table stickyHeader aria-label='simple table'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Photo</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {contacts.map((contact) => (
                            <TableRow key={contact._id}>
                                <TableCell>
                                    {' '}
                                    <img
                                        style={{ height: 100, width: 100, borderRadius: '100%' }}
                                        src={`${contact.selectedImage}`}
                                        alt=''
                                    />{' '}
                                </TableCell>
                                <TableCell> {contact.name} </TableCell>
                                <TableCell> {contact.phoneNo} </TableCell>
                                <TableCell> {contact.address} </TableCell>
                                <TableCell> {contact.email} </TableCell>
                                <TableCell>
                                    {' '}
                                    <button onClick={() => handleDeleteContact(contact._id)}>
                                        {' '}
                                        delete
                                    </button>
                                    <button onClick={() => handleUpdateContact(contact._id)}>
                                        {' '}
                                        edit
                                    </button>{' '}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ContactsList;
