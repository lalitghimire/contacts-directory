import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    contacts: [
        {
            id: 1,
            name: 'Lalit',
            email: 'lalit@email',
            phoneNo: '123456',
            address: 'Helsinki',
            selectedImage: 'new image',
        },
        {
            id: 2,
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
            //console.log('action', action);
            state.contacts = state.contacts.filter((c) => c.id !== action.payload);
        },
        updateContact: (state, action) => {
            console.log('actions', action);
            const {
                payload: { id, name, email, phoneNo, address, selectedImage },
            } = action;
            state.contacts = state.contacts.map((contact) =>
                contact.id === id
                    ? { ...contact, name, email, phoneNo, address, selectedImage }
                    : contact
            );
        },
    },
});

export const { addContact, removeContact, updateContact } = contactsSlice.actions;

export default contactsSlice.reducer;
