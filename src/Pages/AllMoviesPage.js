import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAndSetMovies } from '../features/starWarsMoviesSlice';
import MoviesInfo from '../Components/MoviesInfo';

const AllMoviesPage = () => {
    const dispatch = useDispatch();
    const allMovies = useSelector(state => state.movies.movies);
    const allVehicles = useSelector(state => state.vehicles.vehiclesDisplayed);
    const allStarships = useSelector(state => state.starships.starshipsDisplayed);
    
    //function to display on the hompepage the Starships && Vehicles appeared in the movies if the Starhips and/ or Vehicles page has been visited
    function findNamesForDataStored(allMovies, arrayToGoTrough, type) {
        if (arrayToGoTrough.length === 0) return;
        const vechiclesArraysUrlsToFind = allMovies.map(movie => movie.vehicles); //the the array of URLs from the movie OBJ
        const starshipsArraysUrlsToFind = allMovies.map(movie => movie.starships); //the the array of URLs from the movie OBJ
        const resultArray = [];
        switch (type) {
            case 'vehicles':
                if (arrayToGoTrough.length !== 39) return;
                for (let i = 0; i < vechiclesArraysUrlsToFind.length; i++) {
                    for (let j = 0; j < vechiclesArraysUrlsToFind[i].length; j++) {
                        const matchingObject = arrayToGoTrough.find(vehicle => vehicle.url === vechiclesArraysUrlsToFind[i][j]);
                        if (matchingObject) {
                            resultArray.push({ [i]: matchingObject.name });
                        }
                    }
                }
                break;
            case 'starships':
                if (arrayToGoTrough.length !== 36) return; //API CALL to starships will always return 36, once the API calls are done (even if the respective page is left) the starships will be displayed on Movie page
                for (let i = 0; i < starshipsArraysUrlsToFind.length; i++) { //go through the arrays of URL from movies
                    for (let j = 0; j < starshipsArraysUrlsToFind[i].length; j++) { //go through the SINGLE array of URLs pertaining to a movie 
                        const matchingObject = arrayToGoTrough.find(starship => starship.url === starshipsArraysUrlsToFind[i][j]); //find the URL corresponding to the URL from movies
                        if (matchingObject) {
                            resultArray.push({ [i]: matchingObject.name }); //if found push the name of it along with the index from the array of movies (which is always the same); index: nameCorrespondingToTheURL because that's how the values are tighten toghether and sent to the MoviesInfo so they get rendered accordingly to each movie;
                        }
                    }
                }
                break;
            default:
                break;
        }
        return resultArray;
    }
    const vechiclesNames = findNamesForDataStored(allMovies, allVehicles, 'vehicles');
    const starhipsNames = findNamesForDataStored(allMovies, allStarships, 'starships');


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
                {allMovies.length <= 0 ? <div className="spinner-border" role="status"> </div> : <div>{allMovies.map((movie, index) => <MoviesInfo movies={movie} characters={movie.characters} key={index} vechiclesNames={vechiclesNames} starhipsNames={starhipsNames} index={index}></MoviesInfo>)}</div>}
            </div>
        </React.Fragment>
    )
}

export default AllMoviesPage;