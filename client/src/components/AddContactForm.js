import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contactSlice';

const AddContactForm = () => {
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
        },
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    id: <input name='id' onChange={formik.handleChange} value={formik.values.id} />
                </div>
                <div>
                    name:{' '}
                    <input name='name' onChange={formik.handleChange} value={formik.values.name} />
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

                <button type='submit'>add </button>
            </form>
        </div>
    );
};

export default AddContactForm;
