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

const ContactsList = ({ handleOpen, setCurrentContactId }) => {
    const contacts = useSelector((state) => state.contactsReducer.contacts);
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
    return (
        <div>
            <Button onClick={handleOpen}> Add Contact</Button>
            <TableContainer sx={{ maxHeight: '300px' }} component={Paper}>
                <Table stickyHeader aria-label='simple table'>
                    <TableHead>
                        <TableRow>
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
