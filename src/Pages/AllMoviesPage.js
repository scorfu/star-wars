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
            
            <h5>The top 5 colors specific to each movie, according to <a href='https://www.vox.com/culture/2015/12/17/10322514/star-wars-colors' target="#"><i>VOX</i></a> are represented in each movie card from the below as background colors</h5>
            <div>
                {allMovies.length <= 0 ? <div className="spinner-border" role="status"> </div> : <div>{allMovies.map((movie, index) => <MoviesInfo movies={movie} characters={movie.characters} key={index}></MoviesInfo>)}</div>}
            </div>
        </React.Fragment>
    )
}

export default AllMoviesPage;