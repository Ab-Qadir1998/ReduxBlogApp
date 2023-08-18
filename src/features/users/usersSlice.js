import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id : 1, name : 'John',
    },
    {
        id : 2, name : 'Jeff',
    },
    {
        id : 3, name : 'Jordan',
    },
]

export const usersSlice = createSlice({
    name : 'users',
    initialState,
    reducers : {}
})

export const selectAllUsers = (state) => state.users

export default usersSlice.reducer