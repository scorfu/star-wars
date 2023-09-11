import { createSelector, createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: localStorage.getItem('token'), //either null, or as soon as login is performed will be the token itself
    isLoggedIn: false,
    user: localStorage.getItem('email')
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            console.log(action.payload.idToken);
            state.token = action.payload.idToken;
            state.user = action.payload.email;
            state.isLoggedIn = !state.isLoggedIn;
            localStorage.setItem('token', action.payload.idToken);
            localStorage.setItem('email', action.payload.email)
        },
        logout: (state, action) => {
            state.token = null;
            state.email = null;
            state.isLoggedIn = false;
            localStorage.removeItem('token');
            localStorage.removeItem('email');
        },
    }
});


export const userSelector = createSelector((state) => state.user)
export const {login, logout} = authSlice.actions;
export default authSlice.reducer;