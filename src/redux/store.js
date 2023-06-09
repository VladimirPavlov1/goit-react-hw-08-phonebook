import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { authReducer } from './Auth/authSlice';
import { contactsReducer } from './Contact/contactsSlice';
import { filterSlice } from './Contact/filterSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};



export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterSlice.reducer,
    auth: persistReducer(authPersistConfig, authReducer)
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',


});

export const persistor = persistStore(store);
