import React from 'react';
import FileBase from 'react-file-base64';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, updateContact } from '../redux/contactSlice';
import { Button, Dialog, DialogContent, DialogTitle, TextField, Typography } from '@mui/material';

const ContactForm = ({ openModal, handleClose, currentContactId, setCurrentContactId }) => {
    const dispatch = useDispatch();

    const contactTobeEdited = useSelector((state) =>
        currentContactId
            ? state.contactsReducer.contacts.find((c) => c._id === currentContactId)
            : null
    );

    const initialValues =
        currentContactId === 0
            ? {
                  name: '',
                  email: '',
                  phoneNo: '',
                  address: '',
                  selectedImage: '',
              }
            : contactTobeEdited;

    const validationSchema = yup
        .object()
        .shape({
            name: yup.string('Enter a name').required('Name is required'),
            email: yup.string('Enter an email').email('Enter valid email'),
            phoneNo: yup.number('Enter number').typeError('Must be a number'),
            address: yup.string('Enter your address'),
        })
        .test('at least one required', 'provide at least one ', function _(value) {
            const atLeastOne = !!(value.email || value.phoneNo || value.address);
            if (!atLeastOne) {
                return new yup.ValidationError(
                    'Provide at least one among email, phone number or address', //Message
                    'null',
                    'address', //error name
                    'required' //type
                );
            }
            return true;
        });

    const formik = useFormik({
        initialValues,
        validationSchema: validationSchema,
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
                        name='name'
                        variant='outlined'
                        label='Name'
                        sx={{ m: 1, width: '25ch' }}
                        style={{ width: '100%' }}
                        InputLabelProps={{ style: { fontSize: 23 } }}
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                    />

                    <TextField
                        name='email'
                        variant='outlined'
                        label='Email'
                        sx={{ m: 1, width: '25ch' }}
                        style={{ width: '100%' }}
                        InputLabelProps={{ style: { fontSize: 23 } }}
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
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
                        error={formik.touched.phoneNo && Boolean(formik.errors.phoneNo)}
                        helperText={formik.touched.phoneNo && formik.errors.phoneNo}
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
                        error={formik.touched.address && Boolean(formik.errors.address)}
                        helperText={formik.touched.address && formik.errors.address}
                    />

                    <div style={{ margin: 10, padding: 2 }}>
                        <Typography> Add an image file for contact</Typography>
                        <FileBase
                            type='file'
                            multiple={false}
                            onDone={({ base64 }) => formik.setFieldValue('selectedImage', base64)}
                        />
                    </div>

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
