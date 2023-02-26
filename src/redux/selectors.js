export const selectContacts = state => state.contacts.items;

export const selectFilter = state => state.filters.status;

export const selectFilteredContacts = state => {
  return state.contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(state.filter)
  );
};
