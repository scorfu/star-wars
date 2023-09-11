import { createSlice } from '@reduxjs/toolkit';
import { fetchStarWars } from '../fetch/fetch';

const initialState = {
    starshipsDisplayed: [],

    currentPageURL: 'https://swapi.dev/api/starships/?page=1',
    currentPageNumber: 1,
}

const starshipsSlice = createSlice({
    name: 'starships',
    initialState,
    reducers: {

        setStarshipsDisplayed: (state, action) => {
            state.starshipsDisplayed.push(...action.payload);
        },
        setCurrentPageURL: (state, action) => {
            state.currentPageURL = action.payload;
        }, 
        setCurrentPageNumber: (state, action) => {
            state.currentPageNumber = action.payload;
        }
    }
});

export const {setStarships, setStarshipsDisplayed, setCurrentPageURL, setCurrentPageNumber} = starshipsSlice.actions;


export const fetchAndSetStarships = (url) => async dispatch => {
    try {
        const starshipsData = await fetchStarWars('starships', url);
        dispatch(setStarshipsDisplayed(starshipsData));
    } catch (error) {
        console.error('Couldn\'t get starships\'s data: ', error);
    }
}

export default starshipsSlice.reducer;