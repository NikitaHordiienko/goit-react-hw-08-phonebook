import { createSlice } from "@reduxjs/toolkit";
import { logOut } from "redux/auth/authThunks";
import { fetchContacts, addContact, deleteContact, editContact } from "../contactsThunks/contactsOperations";

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: {
        [fetchContacts.pending]: handlePending,
        [addContact.pending]: handlePending,
        [deleteContact.pending]: handlePending,
        [editContact.pending]: handlePending,
        [fetchContacts.rejected]: handleRejected,
        [addContact.rejected]: handleRejected,
        [deleteContact.rejected]: handleRejected,
        [editContact.rejected]: handleRejected,
        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload  
        },        
        [addContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
        },        
        [deleteContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(contact => contact.id === action.payload.id);
            state.items.splice(index, 1);
        },
        [logOut.fulfilled](state) {
            state.items = [];
            state.isLoading = false;
            state.error = null;
        },
        [editContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            const editedContact = state.items.filter(contact => contact.id !== action.payload.id);
            state.items = [...editedContact, action.payload]
        }
    }
})

export const contactsReducer = contactsSlice.reducer;