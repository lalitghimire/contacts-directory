import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const addContact = createAsyncThunk('contacts/addcontacts', async (payload) => {
    const response = await axios.post('http://localhost:4000/contacts', payload);
    return response.data;
});

export const getAllcontacts = createAsyncThunk('contacts/getcontacts', async () => {
    const response = await axios.get('http://localhost:4000/contacts');
    return response.data;
});
export const removeContact = createAsyncThunk('contacts/removecontacts', async (id) => {
    const resp = await axios.delete(`http://localhost:4000/contacts/${id}`);
    console.log('resp', resp);
    return id;
});
export const updateContact = createAsyncThunk('contacts/updatecontacts', async (payload) => {
    console.log('update payload', payload);
    const resp = await axios.put(`http://localhost:4000/contacts/${payload._id}`, payload);
    console.log('resp', resp);
    return resp.data;
});

const initialState = {
    contacts: [],
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addContact.fulfilled, (state, action) => {
                state.contacts.push(action.payload);
            })
            .addCase(getAllcontacts.fulfilled, (state, action) => {
                state.contacts = action.payload;
            })
            .addCase(removeContact.fulfilled, (state, action) => {
                state.contacts = state.contacts.filter((c) => c._id !== action.payload);
            })
            .addCase(updateContact.fulfilled, (state, action) => {
                state.contacts = state.contacts.map((contact) =>
                    contact._id === action.payload._id ? action.payload : contact
                );
            });
    },
});

//export const {} = contactsSlice.actions; //use when there is something in reducer

export default contactsSlice.reducer;
