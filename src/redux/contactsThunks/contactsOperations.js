import { createAsyncThunk } from "@reduxjs/toolkit";
import { contactsAPI } from "redux/services/axiosBase";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const { data } = await contactsAPI.get('/contacts');
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.massage)
        }
    }
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async ({ name, phone}, thunkAPI) => {
        try {
            const { data } = await contactsAPI.post('/contacts', { name, phone});
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.massage)
        }
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (id, thunkAPI) => {
        try {
            const { data } = await contactsAPI.delete(`/contacts/${id}`);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.massage)
        }
    }
);