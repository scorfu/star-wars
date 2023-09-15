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
        .then(() => {
            dispatch(fetchAndSetNotes(uID));//re-setting data to store so the component gets re-rendered
        }).catch((error) => {
            console.error(error.response.data.error);
            alert(error.response.data.error);
          });
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