import {createSlice} from '@reduxjs/toolkit';
import { fetchStarWars } from '../fetch/fetch';

const initialState = {
    movies: [],
    addedMovies: []
}

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload;
        },
        setAddedMovies: (state, action) => {
            state.addedMovies = action.payload;
        }
    }
});

export const { setMovies, setAddedMovies} = moviesSlice.actions;

export const fetchAndSetMovies = () => async dispatch => {
    try {
        const moviesData = await fetchStarWars('movies');
        dispatch(setMovies(moviesData))
    } catch(error) {
        console.error('Couldn\'t get movie\'s data: ', error);
    }
};


export default moviesSlice.reducer;