import { createSlice, nanoid } from '@reduxjs/toolkit';
import { exempleContacts } from 'helpers/exempleContacts';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: exempleContacts },
  reducers: {
    addContact: {
      reducer(state, action) {
        return { contacts: [action.payload, ...state.contacts] };
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact: {
      reducer(state, action) {
        return {
          contacts: state.contacts.filter(
            contact => contact.id !== action.payload.id
          ),
        };
      },
      prepare(contactId) {
        return {
          payload: { id: contactId },
        };
      },
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact } = contactsSlice.actions;
