import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    toast.success('You are registered!');
    return data;
  } catch (error) {
    toast.error('Oops, something went wrong!');
  }
});

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    toast.success('You are login!');
    return data;
  } catch (error) {
    toast.error('Oops, something went wrong!');
  }
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
    toast.success('You are logout!');
  } catch (error) {
    toast.error('Oops, something went wrong!');
  }
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      toast.error('Oops, something went wrong!');
    }
  }
);

export const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshingUser: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [operations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [operations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [operations.logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [operations.fetchCurrentUser.pending](state) {
      state.isRefreshingUser = true;
    },
    [operations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshingUser = false;
    },
    [operations.fetchCurrentUser.rejected](state) {
      state.isRefreshingUser = false;
    },
  },
});

const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUser = state => state.auth.user;
const getIsRefreshingUser = state => state.auth.isRefreshingUser;

export const authSelectors = {
  getIsLoggedIn,
  getUser,
  getIsRefreshingUser,
};
