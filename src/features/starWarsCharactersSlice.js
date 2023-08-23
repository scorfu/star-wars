import {createSlice} from '@reduxjs/toolkit';
import { fetchStarWars } from '../fetch/fetch';

const initialState = {
    characters: [],
    nextPage: null,
    previousPage: null,
    addedCharacters: []
}

const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        setCharacters: (state, action) => {
            state.characters = action.payload;
        },
        setAddedCharacters: (state, action) => {
            state.addedCharacters = action.payload;
        },
        setNextPage: (state, action) => {
            state.nextPage = action.payload
        },
        setPreviousPage: (state, action) => {
            state.previousPage = action.payload
        }
    }
});

export const { setCharacters, setAddedCharacters, setNextPage, setPreviousPage} = charactersSlice.actions;

export const fetchAndSetCharacters = () => async dispatch => {

    try {
        const charactersData = await fetchStarWars('characters', 'https://swapi.dev/api/people/');
        dispatch(setCharacters(charactersData.results));
        dispatch(setNextPage(charactersData.next));
        dispatch(setPreviousPage(charactersData.previous));
        console.log(charactersData);
    } catch(error) {
        console.error('Couldn\'t get movie\'s data: ', error);
    }
};


export default charactersSlice.reducer;