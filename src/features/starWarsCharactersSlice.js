import { createSlice } from '@reduxjs/toolkit';
import { fetchStarWars } from '../fetch/fetch';

const initialState = {
    charactersCurrently: [],
    charactersByPage: {},
    currentPage: 'https://swapi.dev/api/people/?page=1',
    currentPageNumber: 1,
    isLoading: true
}

const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        setCharacters: (state, action) => {
            const characters = action.payload.results; //get the array of characters
            state.charactersByPage[state.currentPageNumber] = characters; // key=the number of the page: the array of characters corresponding to the number of the page
        },

        setCharactersCurently: (state, action) => {
            state.charactersCurrently = action.payload;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setCurrentPageNumber: (state, action) => {
            state.currentPageNumber = action.payload;
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        }
    }
});

export const { setCharacters, setCharactersCurently, setCurrentPage, setCurrentPageNumber, setIsLoading } = charactersSlice.actions;

export const fetchAndSetCharacters = (url) => async dispatch => {

    try {
        const charactersData = await fetchStarWars('characters', url);
        console.log(charactersData);
        dispatch(setCharacters(charactersData));
        dispatch(setCharactersCurently(charactersData.results));
        dispatch(setIsLoading(false))
    } catch (error) {
        console.error('Couldn\'t get movie\'s data: ', error);
    }
};


export default charactersSlice.reducer;