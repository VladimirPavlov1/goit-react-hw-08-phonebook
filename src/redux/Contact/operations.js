import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';





axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkApi) => {
   try {
      const response = await axios.get('/contacts');

      return response.data;

   } catch (error) {
      return thunkApi.rejectWithValue(error.message)

   }
});

export const addContacts = createAsyncThunk("contacts/addContacts", async (text, thunkApi) => {
   try {
      const response = await axios.post('/contacts', text);

      return response.data;

   } catch (error) {
      return thunkApi.rejectWithValue(error.message);

   }
});

export const deleteContacts = createAsyncThunk("contacts/deleteContacts", async (contactId, thunkApi) => {
   try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
   } catch (error) {
      return thunkApi.rejectWithValue(error.message)
   }
})
