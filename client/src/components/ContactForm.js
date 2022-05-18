import React from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, updateContact } from '../redux/contactSlice';
import { Button, Dialog, DialogContent, DialogTitle, TextField } from '@mui/material';

const ContactForm = ({ openModal, handleClose, currentContactId, setCurrentContactId }) => {
    const dispatch = useDispatch();

    const contactTobeEdited = useSelector((state) =>
        currentContactId
            ? state.contactsReducer.contacts.find((c) => c.id === currentContactId)
            : null
    );

    const initialValues =
        currentContactId === 0
            ? {
                  id: '',
                  name: '',
                  email: '',
                  phoneNo: '',
                  address: '',
                  selectedImage: '',
              }
            : contactTobeEdited;
    const formik = useFormik({
        initialValues,
        onSubmit: (values) => {
            currentContactId === 0 ? dispatch(addContact(values)) : dispatch(updateContact(values));
            formik.resetForm();
            handleClose();
            setCurrentContactId(0);
        },
        enableReinitialize: true,
    });

    return (
        <Dialog open={openModal} onClose={handleClose} aria-labelledby='form-dialog-title'>
            <DialogTitle id='form-dialog-title'>Contact Details</DialogTitle>
            <DialogContent>
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        name='id'
                        variant='outlined'
                        label='id'
                        sx={{ m: 1, width: '25ch' }}
                        style={{ width: '100%' }}
                        InputLabelProps={{ style: { fontSize: 23 } }}
                        onChange={formik.handleChange}
                        value={formik.values.id}
                    />

                    <TextField
                        name='name'
                        variant='outlined'
                        label='name'
                        sx={{ m: 1, width: '25ch' }}
                        style={{ width: '100%' }}
                        InputLabelProps={{ style: { fontSize: 23 } }}
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />

                    <TextField
                        name='email'
                        variant='outlined'
                        label='email'
                        sx={{ m: 1, width: '25ch' }}
                        style={{ width: '100%' }}
                        InputLabelProps={{ style: { fontSize: 23 } }}
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />

                    <TextField
                        name='phoneNo'
                        variant='outlined'
                        label='Phone number'
                        sx={{ m: 1, width: '25ch' }}
                        style={{ width: '100%' }}
                        InputLabelProps={{ style: { fontSize: 23 } }}
                        onChange={formik.handleChange}
                        value={formik.values.phoneNo}
                    />

                    <TextField
                        name='address'
                        variant='outlined'
                        label='Address'
                        sx={{ m: 1, width: '25ch' }}
                        style={{ width: '100%' }}
                        InputLabelProps={{ style: { fontSize: 23 } }}
                        onChange={formik.handleChange}
                        value={formik.values.address}
                    />

                    <TextField
                        name='selectedImage'
                        variant='outlined'
                        label='Image'
                        sx={{ m: 1, width: '25ch' }}
                        style={{ width: '100%' }}
                        InputLabelProps={{ style: { fontSize: 23 } }}
                        onChange={formik.handleChange}
                        value={formik.values.selectedImage}
                    />

                    <Button variant='outlined' type='submit'>
                        {`${currentContactId === 0 ? 'Add' : 'Update'} Contact`}
                    </Button>
                    <Button variant='outlined' color='secondary' onClick={handleClose}>
                        close
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default ContactForm;
