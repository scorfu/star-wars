import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPageURL, setCurrentPageNumber, fetchAndSetVehicles } from '../features/starWarsVehiclesSlice';
import VehiclesInfo from "../Components/VehiclesInfo";

const AllVechicles = () => {
    const dispatch = useDispatch();
    const vehiclesDisplayed = useSelector(state => state.vehicles.vehiclesDisplayed);
    const currentPageNumber = useSelector(state => state.vehicles.currentPageNumber);
    const currentPageURL = useSelector(state => state.vehicles.currentPageURL);
    const URLtoAdd = 'https://swapi.dev/api/vehicles/?page=';
    const [isLoading, setIsLoading] = useState(false);

    console.log('on PAGE: ', vehiclesDisplayed);
    console.log('PAGE: ', currentPageNumber);

    useEffect(() => {
        if (currentPageNumber < 5) {
            const nextPageNumber = currentPageNumber + 1;
            setIsLoading(true);
            dispatch(fetchAndSetVehicles(currentPageURL)).then(() => setIsLoading(false));
            dispatch(setCurrentPageNumber(nextPageNumber));
            dispatch(setCurrentPageURL(URLtoAdd + nextPageNumber));
        }
    }, [currentPageNumber]);

    return (
        <React.Fragment>
            <h1>Vehicles</h1>
            <React.Fragment>{isLoading ?
                <div className="spinner-border" role="status"> </div> :
                <div>
                    {vehiclesDisplayed.map(vehicle => <VehiclesInfo vehicle={vehicle} key={vehicle.name}></VehiclesInfo>)}
                </div>
            }</React.Fragment>
        </React.Fragment>
    )
}
export default AllVechicles;