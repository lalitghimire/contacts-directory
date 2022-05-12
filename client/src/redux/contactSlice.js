import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    contacts: [
        {
            name: 'Lalit',
            email: 'lalit@email',
            phoneNo: '123456',
            address: 'Helsinki',
            selectedImage: 'new image',
        },
        {
            name: 'rohitt',
            email: 'lalit@email',
            phoneNo: '123456',
            address: 'Helsinki',
            selectedImage: 'new image',
        },
    ],
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: (state, action) => {
            state.contacts = [...state.contacts, action.payload];
        },
        removeContact: (state, action) => {
            state.contacts = state.contacts.filter((c) => c.id === action.payload.id);
        },
    },
});

export const { addContact, removeContact } = contactsSlice.actions;

export default contactsSlice.reducer;
