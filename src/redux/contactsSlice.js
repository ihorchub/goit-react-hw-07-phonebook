import { createSlice, nanoid } from '@reduxjs/toolkit';
import { exempleContacts } from 'helpers/exempleContacts';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: exempleContacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        return [action.payload, ...state];
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
        return state.filter(contact => contact.id !== action.payload.id);
      },
      prepare(contactId) {
        return {
          payload: { id: contactId },
        };
      },
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
