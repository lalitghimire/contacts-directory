import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const addContact = createAsyncThunk(
    'contacts/addcontacts',
    async (newContact, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:4000/contacts', newContact);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const getAllcontacts = createAsyncThunk(
    'contacts/getcontacts',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('http://localhost:4000/contacts');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const removeContact = createAsyncThunk(
    'contacts/removecontacts',
    async (id, { rejectWithValue }) => {
        try {
            const response = await axios.delete(`http://localhost:4000/contacts/${id}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const updateContact = createAsyncThunk(
    'contacts/updatecontacts',
    async (toBeUpdatedContact, { rejectWithValue }) => {
        try {
            const response = await axios.put(
                `http://localhost:4000/contacts/${toBeUpdatedContact._id}`,
                toBeUpdatedContact
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const initialState = {
    contacts: [],
    isLoading: false,
    error: '',
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addContact.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.contacts.push(action.payload);
                state.error = '';
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
                state.error = '';
            })
            .addCase(getAllcontacts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            .addCase(removeContact.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(removeContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.contacts = state.contacts.filter((c) => c._id !== action.payload.id);
                state.error = '';
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
                state.error = '';
            })
            .addCase(updateContact.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

//export const {  } = contactsSlice.actions; //use when there is something in reducer

export default contactsSlice.reducer;
