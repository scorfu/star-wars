import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPageURL, setCurrentPageNumber, fetchAndSetStarships } from '../features/starWarsStarshipsSlice';
import StarshipsInfo from "../Components/StarshipsInfo";
import classes from '../styles/styles/AllStarships.module.css';


const AllStarShips = () => {
    const dispatch = useDispatch();
    const currentPageURL = useSelector(state => state.starships.currentPageURL);
    const starshipsDisplayed = useSelector(state => state.starships.starshipsDisplayed);
    const currentPageNumber = useSelector(state => state.starships.currentPageNumber);
    const URLtoAdd = 'https://swapi.dev/api/starships/?page=';
    const [isLoading, setIsLoading] = useState(false);
    console.log('on page:', starshipsDisplayed);

    useEffect(() => {
        if (currentPageNumber < 5) {
            setIsLoading(true);
            let nextPageNumber = currentPageNumber + 1;
            dispatch(fetchAndSetStarships(currentPageURL)).then(() => {
                setIsLoading(false);
            });
            dispatch(setCurrentPageNumber(nextPageNumber));
            dispatch(setCurrentPageURL(URLtoAdd + nextPageNumber));
        }
    }, [currentPageNumber]);

    return (
        <React.Fragment>
            <h1>Starships</h1>
            <React.Fragment>{isLoading ?
                <div className="spinner-border" role="status"> </div> :
                <div className={classes.starhips_container}>
                    {starshipsDisplayed.map(starship => <StarshipsInfo starship={starship} key={starship.name}></StarshipsInfo>)}
                </div>
            }</React.Fragment>
        </React.Fragment>
    )
}
export default AllStarShips;