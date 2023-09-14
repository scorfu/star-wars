import { configureStore } from "@reduxjs/toolkit";
import starWarsMoviesSlice from "../features/starWarsMoviesSlice";
import starWarsCharactersSlice from "../features/starWarsCharactersSlice";
import starWarsSpeciesSlice from "../features/starWarsSpeciesSlice";
import starWarsPlanetsSlice from "../features/starWarsPlanetsSlice";
import starWarsStarshipsSlice from "../features/starWarsStarshipsSlice";
import starWarsVehiclesSlice from "../features/starWarsVehiclesSlice";
import starWarsAuthSlice from "../features/starWarsAuthSlice";
import favoritesSlice from "../features/favoritesSlice";

export const store = configureStore({
    reducer: {
        movies: starWarsMoviesSlice,
        characters: starWarsCharactersSlice,
        species: starWarsSpeciesSlice,
        planets: starWarsPlanetsSlice,
        starships: starWarsStarshipsSlice,
        vehicles: starWarsVehiclesSlice,
        auth: starWarsAuthSlice,
        favorites: favoritesSlice
    }
})