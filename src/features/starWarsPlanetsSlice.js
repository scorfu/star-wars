import { createSlice } from '@reduxjs/toolkit';
import { fetchStarWars } from '../fetch/fetch';

const initialState = {
    planetsCurrently: [],
    planetsByPage: {},
    currentPage: 'https://swapi.dev/api/planets/?page=1',
    currentPageNumber: 1,
    isLoading: true
}

const planetsSlice = createSlice({
    name: 'planets',
    initialState,
    reducers: {
        setPlanets: (state, action) => {
            const planets = action.payload;
            state.planetsByPage[state.currentPageNumber] = planets;
        },
        setPlanetsCurrently: (state, action) => {
            state.planetsCurrently = action.payload;
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

export const { setPlanets, setPlanetsCurrently, setCurrentPage, setCurrentPageNumber, setIsLoading } = planetsSlice.actions;

export const fetchAndSetPlanets = (url) => async dispatch => {
    try {
        const planetsData = await fetchStarWars('planets', url)
        dispatch(setPlanets(planetsData));
        dispatch(setPlanetsCurrently(planetsData));
        dispatch(setIsLoading(false));
    } catch (error) {
        console.error('Couldn\'t get planet\'s data: ', error);
    }
}

export default planetsSlice.reducer;