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

    const [arrayOfShips, setArrayOfShips] = useState([...starshipsDisplayed]);
    const [sortedAz, setSortedAz] = useState(false);
    console.log('what is coppied', arrayOfShips);

    const sortHandler = () => {
        const str = [...starshipsDisplayed]
        if (!sortedAz) {
            const sorted = str.sort((a, b) => {
                const nameA = a.name.toLowerCase();
                const nameB = b.name.toLowerCase();
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            });
            setSortedAz(!sortedAz)
            setArrayOfShips(sorted);
        } else if(sortedAz) {
            const sorted = str.sort((a, b) => {
                const nameA = a.name.toLowerCase();
                const nameB = b.name.toLowerCase();

                if (nameA > nameB) {
                    return -1;
                }
                if (nameA < nameB) {
                    return 1;
                }
                return 0;
            });
            setSortedAz(!sortedAz);
            setArrayOfShips(sorted);
        } 
    } 

    useEffect(() => {
        if (currentPageNumber < 5) {
            setIsLoading(true);
            let nextPageNumber = currentPageNumber + 1;
            dispatch(fetchAndSetStarships(currentPageURL)).then(() => {
                setIsLoading(false);
            });
            dispatch(setCurrentPageNumber(nextPageNumber));
            dispatch(setCurrentPageURL(URLtoAdd + nextPageNumber));
            setArrayOfShips(starshipsDisplayed);
        }
    }, [currentPageNumber]);

    return (
        <React.Fragment>
            <h1>Starships</h1>
            <button onClick={sortHandler}>Sort {sortedAz ? `Z-a` : 'A-z'}</button>
            <React.Fragment>{isLoading ?
                <div className="spinner-border" role="status"></div> :
                <div className={classes.starhips_container}>

                    {arrayOfShips.length === 0 ? starshipsDisplayed.map(starship => <StarshipsInfo starship={starship} key={starship.name}></StarshipsInfo>)
                        :
                        arrayOfShips.map(starship => <StarshipsInfo starship={starship} key={starship.name}></StarshipsInfo>)}


                    {/* {arrayOfShips.map(starship => <StarshipsInfo starship={starship} key={starship.name}></StarshipsInfo>)} */}
                </div>
            }</React.Fragment>
        </React.Fragment>
    )
}
export default AllStarShips;