import { createAsyncThunk } from "@reduxjs/toolkit";
// import { contactsAPI } from "redux/services/axiosBase";
import axios from "axios";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const { data } = await axios.get('/contacts');
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.massage)
        }
    }
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async ({ name, number}, thunkAPI) => {
        try {
            const { data } = await axios.post('/contacts', { name, number});
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
            const { data } = await axios.delete(`/contacts/${id}`);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.massage)
        }
    }
);