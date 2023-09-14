import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFavorites } from "../../fetch/fetch";
import { fetchAndSetNotes } from "../../features/favoritesSlice";

const Notes = ({ noteDetails }) => {
    const dispatch = useDispatch();
    const notes = useSelector(state => state.favorites.notes);
    const uID = useSelector(state => state.auth.uID);

    const deleteNoteHandler = () => {
        const foundNote = notes.find( note => note === noteDetails);

        fetchFavorites('deleteNotes', `https://starwars-9376c-default-rtdb.europe-west1.firebasedatabase.app/notes/${uID}/${foundNote.id}.json`)
        .then((res) => {
            // console.log(res); //add validation in case the answer is not OK!!!
            dispatch(fetchAndSetNotes(uID));
        });//re-setting data to store so the component gets re-rendered
    }

    return (
        <div id={noteDetails.id}>
            <div><b>{noteDetails.summary}</b></div>
            <div>Description: {noteDetails.description}</div>
            <p>P.S. <i>{noteDetails.ps}</i></p>
            <button onClick={deleteNoteHandler}>Delete Note</button>
            <hr />
        </div>
    )
}

export default Notes;