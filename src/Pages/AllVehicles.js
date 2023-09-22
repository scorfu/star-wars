import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPageURL, setCurrentPageNumber, fetchAndSetVehicles } from '../features/starWarsVehiclesSlice';
import VehiclesInfo from "../Components/VehiclesInfo";
import classes from '../styles/styles/AllVehicle.module.css';

import { sortHandler } from "../utils/helperFunctions";

const AllVechicles = () => {
    const dispatch = useDispatch();
    const vehiclesDisplayed = useSelector(state => state.vehicles.vehiclesDisplayed);
    const currentPageNumber = useSelector(state => state.vehicles.currentPageNumber);
    const currentPageURL = useSelector(state => state.vehicles.currentPageURL);
    const URLtoAdd = 'https://swapi.dev/api/vehicles/?page=';
    const [isLoading, setIsLoading] = useState(false);

    console.log('on PAGE: ', vehiclesDisplayed);
    console.log('PAGE: ', currentPageNumber);

    const [arrayOfVehicles, setArrayOfVehicles] = useState([]);
    const [sortedAz, setSortedAz] = useState(false);


    const onSortHandler = () => {
        const sorted = sortHandler(vehiclesDisplayed, sortedAz);
        setSortedAz(!sortedAz);
        setArrayOfVehicles(sorted);
    }

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
            <button onClick={onSortHandler}>Sort {sortedAz ? `Z-a` : 'A-z'}</button>
            <React.Fragment>{isLoading ?
                <div className="spinner-border" role="status"> </div> :
                <div className={classes.vehicle_container}>
                    {arrayOfVehicles.length === 0 ? vehiclesDisplayed.map(vehicle => <VehiclesInfo vehicle={vehicle} key={vehicle.name}></VehiclesInfo>) : 
                    arrayOfVehicles.map(vehicle => <VehiclesInfo vehicle={vehicle} key={vehicle.name}></VehiclesInfo>)}
                </div>
            }</React.Fragment>
        </React.Fragment>
    )
}
export default AllVechicles;