import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAndSetNotes } from "../../features/favoritesSlice";
import Notes from './Notes';

const Favorites = () => {
    const dispatch = useDispatch();
    const allNotes = useSelector(state => state.favorites.notes);
    const uID = useSelector(state => state.auth.uID);

    useEffect(() => { //fetch the data and set it to store when component mounts
        dispatch(fetchAndSetNotes(uID));
    }, []);

    return (
        <React.Fragment>
            {allNotes.length === 0 ? <div>No favorites notes added</div> : <h2>Your Notes</h2>}

            {allNotes.map((note, index) => {
                return (
                <Notes key={index} noteDetails={note}>
                </Notes>
                )
            })};
        </React.Fragment>
    )
}
export default Favorites;