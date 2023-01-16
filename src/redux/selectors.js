export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter.name;

export const selectVisibleContacts = state => {
  const items = selectContacts(state);
  const filter = selectFilter(state);

  return items.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
};
