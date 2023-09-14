import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: localStorage.getItem('token'), //either null, or as soon as login is performed will be the token itself
    uID: localStorage.getItem('uID'),
    isLoggedIn: false,
    user: localStorage.getItem('email')
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            console.log(action.payload);
            state.token = action.payload.idToken;
            state.user = action.payload.email;
            state.uID = action.payload.uID;
            state.isLoggedIn = !state.isLoggedIn;
            localStorage.setItem('token', action.payload.idToken);
            localStorage.setItem('email', action.payload.email);
            localStorage.setItem('uID', action.payload.uID);
        },
        logout: (state, action) => {
            state.token = null;
            state.email = null;
            state.uID = null;
            state.isLoggedIn = false;
            localStorage.removeItem('token');
            localStorage.removeItem('email');
            localStorage.removeItem('uID')
        },
    }
});

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;