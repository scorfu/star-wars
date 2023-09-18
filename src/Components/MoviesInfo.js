import React from "react";
import classes from '../styles/styles/MoviesInfo.module.css';

const MoviesInfo = ({ movies, vechiclesNames, starhipsNames, index }) => {
    const title_id = 'title'+movies.episode_id;
    const number_id = 'number'+movies.episode_id;
    const director_id = 'director'+movies.episode_id;
    const release_id = 'release'+movies.episode_id;
    const text_id = 'text'+movies.episode_id;

    const vechiclesNamess = vechiclesNames === undefined ? null : vechiclesNames.map(vehicle => {
        if(vehicle[index] === undefined) return;
        return vehicle[index] + '; '});
    const starhipsNamess = starhipsNames === undefined ? null : starhipsNames.map(starship => {
        if(starship[index] === undefined) return;
        return starship[index] +  '; '});

    return <React.Fragment>
        <div className={`card ${classes.card}`}>
            <div className={`card-body`}>
                <h5 className={`card-title ${classes[title_id]}`}>{movies.title}</h5>
                <h6 className={classes[number_id]}>Movie number: {movies.episode_id}</h6>
                <h6 className={`card-subtitle mb-2 text-body-secondary ${classes[director_id]}`}>Director & Producer: {movies.director} & {movies.producer}</h6>
                <h6 className={`card-subtitle mb-2 text-body-secondary ${classes[release_id]}`}>Release date: {movies.release_date}</h6>
                <p className={`card-text ${classes[text_id]}`}>{movies.opening_crawl}</p>
                <div className={`card-text ${classes[text_id]}`}>{starhipsNamess === null ? '🚀' : <b>Starships in this movie: {starhipsNamess}</b>}</div>
                <div className={`card-text ${classes[text_id]}`}>{vechiclesNamess === null ? '🛸' : <b>Vehicles in this movie: {vechiclesNamess}</b>}</div>
            </div>
        </div>
    </React.Fragment>
}

export default MoviesInfo;