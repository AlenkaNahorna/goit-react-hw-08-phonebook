import { configureStore } from '@reduxjs/toolkit';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { middleware } from './middleware';
// import { contactsReducer } from './contactsSlice';
import authSlice from './auth/authSlice';

const authReducer = authSlice.reducer;

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    // todos: todosReducer,
  },
  middleware,
});

export const persistor = persistStore(store);
