import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { fetchAndSetMovies } from '../features/starWarsMoviesSlice';
import MoviesInfo from '../Components/MoviesInfo';

const AllMoviesPage = () => {
    const dispatch = useDispatch();
    const allMovies = useSelector(state => state.movies.movies);

    console.log(allMovies);

    useEffect(() => {
        if (allMovies.length === 0) {
            dispatch(fetchAndSetMovies());
        };
    }, []);

    return (
        <React.Fragment>
            <h1>Movies</h1>
            <div>
                TO DO:
            </div>
            <div>
                One Movies/ All Characters page has been clicked (and all characters have been set in the store) make a condition for them to be displayed on other pages
                <br />
                eg: "https://swapi.dev/api/people/1/"
                MOVIES page has a characters array that you do not display because they are API links("https://swapi.dev/api/people/1/"). Conditionally display them if you have them in the store, like once you went in AllCharacters page
            </div>
            <p>The background colors (except black, there are 5 in total) specific to each movie, according to VOX (https://www.vox.com/culture/2015/12/17/10322514/star-wars-colors) are represented in each card as background colors</p>
            <div>
                {allMovies.length <= 0 ? <div className="spinner-border" role="status"> </div> : <div>{allMovies.map((movie, index) => <MoviesInfo movies={movie} characters={movie.characters} key={index}></MoviesInfo>)}</div>}
            </div>
        </React.Fragment>
    )
}

export default AllMoviesPage;