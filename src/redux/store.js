import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './Auth/authSlice';
import { contactsReducer } from './Contact/contactsSlice';
import { filterSlice } from './Contact/filterSlice';






export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterSlice.reducer,
    auth:authReducer,
  },


});


