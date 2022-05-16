import React from 'react';
import { useFormik } from 'formik';
import Button from '@mui/material/Button';

import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contactSlice';
import { Grid } from '@mui/material';

const ContactForm = () => {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            id: '',
            name: '',
            email: '',
            phoneNo: '',
            address: '',
            selectedImage: '',
        },
        onSubmit: (values) => {
            dispatch(addContact(values));
            formik.resetForm();
        },
    });

    return (
        <div>
            <Grid container justifyContent={'center'}>
                <form onSubmit={formik.handleSubmit}>
                    <div>
                        id:{' '}
                        <input name='id' onChange={formik.handleChange} value={formik.values.id} />
                    </div>
                    <div>
                        name:{' '}
                        <input
                            name='name'
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        />
                    </div>
                    <div>
                        email:{' '}
                        <input
                            name='email'
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                    </div>
                    <div>
                        phoneNo:{' '}
                        <input
                            name='phoneNo'
                            onChange={formik.handleChange}
                            value={formik.values.phoneNo}
                        />
                    </div>
                    <div>
                        address:{' '}
                        <input
                            name='address'
                            onChange={formik.handleChange}
                            value={formik.values.address}
                        />
                    </div>
                    <div>
                        selectedImage:{' '}
                        <input
                            name='selectedImage'
                            onChange={formik.handleChange}
                            value={formik.values.selectedImage}
                        />
                    </div>

                    <Button variant='outlined' type='submit'>
                        Add Contact
                    </Button>
                </form>
            </Grid>
        </div>
    );
};

export default ContactForm;
