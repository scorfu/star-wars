import React from "react";

const MoviesInfo = ({ movies }) => {
    return <React.Fragment>
        <div className="card" >
            <div className="card-body">
                <h5 className="card-title">{movies.title}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">Director & Producer: {movies.director} & {movies.producer}</h6>
                <h6 className="card-subtitle mb-2 text-body-secondary">Release date: {movies.release_date}</h6>
                <p className="card-text">{movies.opening_crawl}</p>
                {/* <Link to={`/movies/${movies.episode_id}`} className="card-link">More Details</Link> */}
                {/* <div>{characters.map(character => <p>{character}</p>)}</div>
                <a href="#" className="card-link">Another link</a> */}
            </div>
        </div>
    </React.Fragment>
}

export default MoviesInfo;