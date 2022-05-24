import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const addContact = createAsyncThunk(
    'contacts/addcontacts',
    async (newContact, { rejectWithValue }) => {
        try {
            const response = await axios.post('/contacts', newContact);
            toast.success('A new contact has been added');
            return response.data;
        } catch (error) {
            toast.error(' New contact cannot be added');
            return rejectWithValue(error.message);
        }
    }
);

export const getAllcontacts = createAsyncThunk(
    'contacts/getcontacts',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('/contacts');
            return response.data;
        } catch (error) {
            toast.error('Unable to fetch contacts');
            return rejectWithValue(error.message);
        }
    }
);

export const removeContact = createAsyncThunk(
    'contacts/removecontacts',
    async (id, { rejectWithValue }) => {
        try {
            const response = await axios.delete(`/contacts/${id}`);
            toast.warn('Contact has been deleted');
            return response.data;
        } catch (error) {
            toast.error(`Couldn't delete a contact`);
            return rejectWithValue(error.message);
        }
    }
);

export const updateContact = createAsyncThunk(
    'contacts/updatecontacts',
    async (toBeUpdatedContact, { rejectWithValue }) => {
        try {
            const response = await axios.put(
                `/contacts/${toBeUpdatedContact._id}`,
                toBeUpdatedContact
            );
            toast.success(`Contact has been updated`);
            return response.data;
        } catch (error) {
            toast.error(`Couldn't update contact`);
            return rejectWithValue(error.message);
        }
    }
);

const initialState = {
    contacts: [],
    isLoading: false,
    filteredContacts: [],
    error: null,
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        filterContacts: (state, action) => {
            state.contacts = state.filteredContacts.filter((contact) =>
                contact.name.toLowerCase().includes(action.payload)
            );
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addContact.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.contacts.push(action.payload);
                state.error = null;
            })
            .addCase(addContact.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            .addCase(getAllcontacts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllcontacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.contacts = action.payload;
                state.filteredContacts = action.payload;
                state.error = null;
            })
            .addCase(getAllcontacts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            .addCase(removeContact.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(removeContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.contacts = state.contacts.filter((c) => c._id !== action.payload.id);
                state.error = null;
            })
            .addCase(removeContact.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            .addCase(updateContact.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.contacts = state.contacts.map((contact) =>
                    contact._id === action.payload._id ? action.payload : contact
                );
                state.error = null;
            })
            .addCase(updateContact.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { filterContacts } = contactsSlice.actions; //use when there is something in reducer

export default contactsSlice.reducer;
