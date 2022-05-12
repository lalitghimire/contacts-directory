import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactSlice';

const store = configureStore({
    reducer: {
        contactsReducer,
    },
    devTools: true,
});
export { store };
