import { createSlice } from '@reduxjs/toolkit';
import { fetchStarWars } from '../fetch/fetch';

const initialState = {
    vehiclesDisplayed: [],
    currentPageURL: 'https://swapi.dev/api/vehicles/?page=1',
    currentPageNumber: 1,
}

const vehiclesSlice = createSlice({
    name: 'vechicles',
    initialState,
    reducers: {
        setVehiclesDisplayed: (state, action) => {
            state.vehiclesDisplayed.push(...action.payload);
        },
        setCurrentPageURL: (state, action) => {
            state.currentPageURL = action.payload;
        },
        setCurrentPageNumber: (state, action) => {
            state.currentPageNumber = action.payload;
        }
    }
});

export const { setVehiclesDisplayed, setCurrentPageURL, setCurrentPageNumber } = vehiclesSlice.actions;

export const fetchAndSetVehicles = (url) => async dispatch => {
    try {
        const vehiclesData = await fetchStarWars('vehicles', url);
        dispatch(setVehiclesDisplayed(vehiclesData.results));
    } catch (error) {
        console.error('Couldn\'t get vehicles\'s data: ', error);
    }
}

export default vehiclesSlice.reducer;