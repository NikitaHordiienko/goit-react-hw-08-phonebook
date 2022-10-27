import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = {
    value: ''
}

const filterSlice = createSlice({
    name: 'filter',
    initialState: filterInitialState,
    reducers: {
        filterContacts: {
            reducer(state, action) {
                state.value = action.payload
            },
            prepare(value) {
                return {
                    payload: {
                        value,
                    }
                }
            }
        }
    }
})

export const { filterContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;