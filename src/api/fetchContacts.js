import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const fetchAllContacts = async () => {
  return await axios.get('/contacts').then(response => response.data);
};

export const fetchAddContact = async contact => {
  return await axios.post('/contacts', contact).then(response => response.data);
};

export const fetchDeleteContact = async id => {
  return await axios.delete(`/contacts/${id}`).then(() => id);
};

export const fetchEditContact = async ({ id, name, number }) => {
  return await axios
    .patch(`/contacts/${id}`, { name, number })
    .then(response => response.data);
};
