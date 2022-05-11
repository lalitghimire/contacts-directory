import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './reducers/contactReducer';

const store = configureStore({
    reducer: contactReducer,
    devTools: true,
});
export default store;
