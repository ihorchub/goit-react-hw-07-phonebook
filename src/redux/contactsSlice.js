import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const extraActions = [fetchContacts, addContact, deleteContact];

const getActions = type => isAnyOf(...extraActions.map(action => action[type]));

const fetchContactsFulfilledReducer = (state, action) => {
  state.items = action.payload;
};

const addContactFulfilledReduser = (state, action) => {
  state.items = [action.payload, ...state.items];
};

const deleteContactFulfilledReducer = (state, action) => {
  const index = state.items.findIndex(item => item.id === action.payload.id);
  state.items.splice(index, 1);
};

const anyPendingReduser = state => {
  state.isLoading = true;
};

const anyRejectedReduser = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const anyFulfilledReduser = state => {
  state.isLoading = false;
  state.error = null;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, fetchContactsFulfilledReducer)
      .addCase(addContact.fulfilled, addContactFulfilledReduser)
      .addCase(deleteContact.fulfilled, deleteContactFulfilledReducer)
      .addMatcher(getActions('pending'), anyPendingReduser)
      .addMatcher(getActions('rejected'), anyRejectedReduser)
      .addMatcher(getActions('fulfilled'), anyFulfilledReduser),
});

export const contactsReducer = contactsSlice.reducer;
