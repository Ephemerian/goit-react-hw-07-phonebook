import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectFilter = state => state.filter;

export const selectFilterContacts = createSelector(
    [selectContacts, selectFilter],
    (contacts, filter) => {
      const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter));
      return filteredContacts.sort((a, b) => a.name.localeCompare(b.name));
    }
);
  