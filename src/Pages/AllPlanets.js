import React, { useEffect } from "react";
import Navbar from "../Components/Layout/Navbar";
import { useDispatch, useSelector } from 'react-redux';
import { setPlanetsCurrently, setCurrentPage, setCurrentPageNumber, setIsLoading, fetchAndSetPlanets } from "../features/starWarsPlanetsSlice";
import PlanetsInfo from "../Components/PlanetsInfo";

const AllPlanets = (props) => {
    const dispatch = useDispatch();
    const planetsCurently = useSelector(state => state.planets.planetsCurrently);
    const currentPage = useSelector(state => state.planets.currentPage);
    const currentPageNumber = useSelector(state => state.planets.currentPageNumber);
    const planetsByPage = useSelector(state => state.planets.planetsByPage);
    const isLoading = useSelector(state => state.planets.isLoading);
    const URLtoAdd = 'https://swapi.dev/api/planets/?page=';
    console.log(planetsCurently);
    console.log(currentPage);
    console.log(currentPageNumber);
    console.log(planetsByPage);

    const pageHandler = (direction) => {
        const targetPageNumber = currentPageNumber + direction;
        const targetPageData = Object.keys(planetsByPage).find(pageNo => pageNo == targetPageNumber);

        if (targetPageNumber < 1 || targetPageNumber > 6) {
            console.log('No more pages');
            return;
        }
        if (targetPageData) {
            dispatch(setPlanetsCurrently(planetsByPage[targetPageData]));
            dispatch(setCurrentPageNumber(targetPageNumber));
            dispatch(setCurrentPage(URLtoAdd + targetPageNumber));
            dispatch(setIsLoading(false))
        }
        else {
            dispatch(fetchAndSetPlanets(URLtoAdd + targetPageNumber));
            dispatch(setCurrentPageNumber(targetPageNumber));
            dispatch(setCurrentPage(URLtoAdd + targetPageNumber));
            dispatch(setIsLoading(true));
        }
    }


    useEffect(() => {
        if (!Object.keys(planetsByPage)[0]) {
            dispatch(fetchAndSetPlanets(currentPage));
        }
    }, [])

    return (
        <React.Fragment>
            {/* <Navbar></Navbar> */}
            <h1>Planets</h1>
            <>
                {isLoading ? <div className="spinner-border" role="status"> </div> :
                    <>
                        <button onClick={() => pageHandler(-1)} >Back </button>
                        <span>{currentPageNumber}</span>
                        <button onClick={() => pageHandler(1)}>Next</button>
                        {planetsCurently.map(planet => <PlanetsInfo planet={planet} key={planet.name}></PlanetsInfo>)}
                    </>
                }
            </>

        </React.Fragment>
    )
}
export default AllPlanets;