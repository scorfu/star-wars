import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, useCallback } from 'react';
import { fetchAndSetMovies } from '../features/starWarsMoviesSlice';
import Navbar from '../Components/Navbar';
import MovieCard from '../Components/MovieCard';

const Movies = () => {
    const dispatch = useDispatch();
    // const [isLoading, setIsLoading] = useState(false)
    const allMovies = useSelector(state => state.movies.movies);


    // useEffect(() => {
    //     dispatch(fetchAndSetMovies());
    //     console.log('iar lucuru');
    // }, []) //no dependecy so the effect fn will run only for the first time

    const fetchMoviesIfNeeded = useCallback(() => {
        if (allMovies.length === 0) {
            // Data is not in the Redux store, so fetch it
            dispatch(fetchAndSetMovies())
        }
    }, []);

    useEffect(() => {
        let isCancelled = false;
        if (!isCancelled) {
            fetchMoviesIfNeeded();
        }
        return () => {
            isCancelled = true;
        }
    }, [fetchMoviesIfNeeded]);

    // console.log(allMovies[0].characters);
    return <>
        <Navbar></Navbar>
        <p>Movies hello</p>
        <div>
            {allMovies.length <= 0 ? <div className="spinner-border" role="status"> </div> : <div>{allMovies.map((movie, index) => <MovieCard movies={movie} characters={movie.characters} key={index}></MovieCard>)}</div>}
        </div>


    </>
}

export default Movies;