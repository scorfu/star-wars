import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAndSetSpecies, setCurrentPageNumber, setCurrentPageURL } from "../features/starWarsSpeciesSlice";
import SpeciesInfo from "../Components/SpeciesInfo";

const AllSpecies = () => {
    const dispatch = useDispatch();
    const speciesByPage = useSelector(state => state.species.speciesByPage);
    const currentPageURL = useSelector(state => state.species.currentPageURL);
    const speciesDisplayed = useSelector(state => state.species.speciesDisplayed);
    const currentPageNumber = useSelector(state => state.species.currentPageNumber);
    const [isLoading, setIsLoading] = useState(false);
    const URLtoAdd = 'https://swapi.dev/api/species/?page=';
    console.log("One", speciesDisplayed);
    console.log("All", speciesByPage);

    useEffect(() => {
        if (!Object.keys(speciesByPage)[0]) {
            setIsLoading(true);
            dispatch(fetchAndSetSpecies(currentPageURL)).then(() => setIsLoading(false));
        }
    }, []);

    const loadMoreHandler = () => {
        let nextPageNumber = currentPageNumber + 1;
        setIsLoading(true)
        if (nextPageNumber >= 5) {
            nextPageNumber = currentPageNumber;
            return;
        }
        const nextURL = URLtoAdd + nextPageNumber;
        dispatch(setCurrentPageNumber(nextPageNumber));
        dispatch(setCurrentPageURL(nextURL));
        dispatch(fetchAndSetSpecies(nextURL)).then(() => setIsLoading(false));
    }

    return (
        <React.Fragment>
            <h1>Species</h1>
            <React.Fragment>
                {speciesDisplayed.map(oneSpecies => <SpeciesInfo species={oneSpecies} key={oneSpecies.name}></SpeciesInfo>)}
            </React.Fragment>
            <div>{isLoading ? <div className="spinner-border" role="status"> </div> : <div></div>}</div>
            <React.Fragment>{currentPageNumber >= 4 || isLoading ? <></> : <button onClick={loadMoreHandler}>Load More</button>}</React.Fragment>
        </React.Fragment>
    )
}
export default AllSpecies;