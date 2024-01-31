import { createSlice} from "@reduxjs/toolkit";

import { fetchContacts, addContact, deleteContact } from "./operations";

import { handlePending, handleFulfilled, handleRejected } from "./asyncHandlers";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        contacts: [],
        isLoading: false,
        error: null,
    },
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.fulfilled, (state, {payload}) => {
                state.contacts = payload;
            })
            .addCase(addContact.fulfilled, (state, {payload}) => {
                state.contacts.push(payload);
            })
            .addCase(deleteContact.fulfilled, (state, {payload}) => {
                state.contacts = state.contacts.filter(contact => contact.id !== payload.id);
            })
            .addMatcher((action) => action.type.endsWith("/pending"), handlePending)
            .addMatcher((action) => action.type.endsWith("/rejected"), handleRejected)
            .addMatcher((action) => action.type.endsWith("/fulfilled"), handleFulfilled)  
    },
});


export const contactsReducer = contactsSlice.reducer;
