import { configureStore } from "@reduxjs/toolkit";
import starWarsMoviesSlice from "../features/starWarsMoviesSlice";

import starWarsCharactersSlice from "../features/starWarsCharactersSlice";

export const store = configureStore({
    reducer: {
        movies: starWarsMoviesSlice,
        characters: starWarsCharactersSlice
    }
})