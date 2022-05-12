import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contactSlice';

const store = configureStore({
    reducer: contactReducer,
    devTools: true,
});
export { store };
