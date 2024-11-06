import { createSlice } from "@reduxjs/toolkit";

export interface User {
    _id: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    dob: string;
    role: "STUDENT" | "FACULTY" | "TA";
    loginId: string;
    section: string;
    lastActivity: string;
    totalActivity: string;
}

const initialState = {
    currentUser: null,
};
const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
        },
    },
});

export const { setCurrentUser } = accountSlice.actions;
export default accountSlice.reducer;