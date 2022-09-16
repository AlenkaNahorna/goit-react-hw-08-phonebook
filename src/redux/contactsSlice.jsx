import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  fetchAddContact,
  fetchAllContacts,
  fetchDeleteContact,
  fetchEditContact,
} from 'api/fetchContacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchAllContacts();
      return data;
    } catch (error) {
      toast.error('Oops, something went wrong!');
      return rejectWithValue(error);
    }
  }
);

export const addItem = createAsyncThunk(
  'contacts/addItem',
  async (contact, { rejectWithValue }) => {
    try {
      await fetchAddContact(contact);
    } catch (error) {
      toast.error('Oops, something went wrong!');
      return rejectWithValue(error);
    } finally {
      const data = await fetchAllContacts();
      toast.success('Contact added!');
      return data;
    }
  }
);

export const deleteItem = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await fetchDeleteContact(id);
    } catch (error) {
      toast.error('Contact not found!');
      return rejectWithValue(error);
    } finally {
      const data = await fetchAllContacts();
      toast.success('Contact deleted!');
      return data;
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async contact => {
    try {
      await fetchEditContact(contact);
      toast.success('Contact edited!');
      const data = fetchAllContacts();
      return data;
    } catch (error) {
      toast.error('Oops, something went wrong!');
    }
  }
);

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    filterItems: (state, action) => {
      return { ...state, filter: action.payload };
    },
  },
  extraReducers: {
    [fetchContacts.fulfilled]: (state, action) => {
      return {
        ...state,
        items: [...action.payload],
      };
    },

    [addItem.fulfilled]: (state, action) => {
      return {
        ...state,
        items: [...action.payload],
      };
    },

    [deleteItem.fulfilled]: (state, action) => {
      return {
        ...state,
        items: action.payload,
      };
    },

    [editContact.fulfilled]: (state, action) => {
      return {
        ...state,
        items: [...action.payload],
      };
    },
  },
});

export const { filterItems } = contactsSlice.actions;

export const getContact = state => state.contacts.items;
export const getFilterWord = state => state.contacts.filter;

export const contactsReducer = contactsSlice.reducer;
