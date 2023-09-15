import { createSlice } from '@reduxjs/toolkit';
import { fetchStarWars } from '../fetch/fetch';

const initialState = {
    speciesDisplayed: [],
    speciesByPage: {},
    currentPageURL: 'https://swapi.dev/api/species/?page=1',
    currentPageNumber: 1,
}

const speciesSlice = createSlice({
    name: 'species',
    initialState,
    reducers: {
        setSpecies: (state, action) => {
            const species = action.payload;
            state.speciesByPage[state.currentPageNumber] = species;
        },
        setSpeciesDisplayed: (state, action) => {
            state.speciesDisplayed.push(...action.payload);
        },
        setCurrentPageURL: (state, action) => {
            state.currentPageURL = action.payload;
        }, 
        setCurrentPageNumber: (state, action) => {
            state.currentPageNumber = action.payload;
        }
    }
});

export const {setSpecies, setSpeciesDisplayed, setCurrentPageURL, setCurrentPageNumber} = speciesSlice.actions;

export const fetchAndSetSpecies = (url) => async dispatch => {
    try {
        const speciesData = await fetchStarWars('species', url);
        dispatch(setSpecies(speciesData));
        dispatch(setSpeciesDisplayed(speciesData));
    } catch (error) {
        console.error('Couldn\'t get species\'s data: ', error);
    }
}

export default speciesSlice.reducer;