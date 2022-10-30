import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';  
}

export const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
        try {
            const { data } = await axios.post('/users/signup', credentials);
            setAuthHeader(data.token);
            return data;
        } catch (error) {
            if (error.response.status === 400) {
                toast.error(
                    'This email address is already being used. Please, log in or try another email.'
                )
            }
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const logIn = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
        try {
            const { data } = await axios.post('/users/login', credentials);
            setAuthHeader(data.token);
            return data;
        } catch (error) {
            if (error.response.status === 400) {
                toast.error(
                    'This email address is already being used or you entered the wrong password. Please, check the correctness of entered information.'
                )
            }
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const logOut = createAsyncThunk(
    'auth/logOut',
    async (_, thunkAPI) => {
        try {
            await axios.post('/users/logout');
            clearAuthHeader();
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            return thunkAPI.rejectWithValue('Unable to fetch user');
        }

        try {
            setAuthHeader(persistedToken);
            const { data } = await axios.get('/users/current');
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);