import { createSlice } from '@reduxjs/toolkit';
import { fetchFavorites } from '../fetch/fetch';

// helper function to transform data from OBJ to Array to be properly saved in the store
const transformObjtoArray = (notesOjb) => {
    const notesArray = [];
    for (const key in notesOjb) {
       notesArray.push({
            id: key,
            summary: notesOjb[key].summary,
            description: notesOjb[key].description,
            ps: notesOjb[key].ps
        });
    };
    return notesArray;
};

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 

const initialState = {
    notes: [],
}

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        setNotes: (state, action) => {
            state.notes = action.payload
        }
    }
});

export const { setNotes } = favoritesSlice.actions;

export const fetchAndSetNotes = (userID) => async dispatch => {
    try {
        const notesData = await fetchFavorites('getNotes', `https://starwars-9376c-default-rtdb.europe-west1.firebasedatabase.app/notes/${userID}.json`);  //add the uID so only the notes for the respective user will be fetched
        console.log(notesData.data);
        const onlyNotesData = notesData.data; //coming as an object key(id of the FIREBASE's obj)/ value(actual data as an object)

        dispatch(setNotes(transformObjtoArray(onlyNotesData)))

    } catch(error) {
        console.error('Couldn\'t get favorites data: ', error);
        throw error;
         }
};
    

export default favoritesSlice.reducer; 


