import React, { useRef, useState, } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFavorites } from '../../fetch/fetch'
import { fetchAndSetNotes } from '../../features/favoritesSlice';
import classes from '../../styles/styles/AddFavorite.module.css';

function AddFavorite() {
  const summaryRef = useRef('');
  const descriptionRef = useRef('');
  const psRef = useRef('');
  const uID = useSelector(state => state.auth.uID);
  const dispatch = useDispatch();
  const [key, setKey] = useState(0);

  function submitHandler(event) {
    event.preventDefault();
    // could add validation here...

    const note = {
      summary: summaryRef.current.value,
      description: descriptionRef.current.value,
      ps: psRef.current.value,
    };
    //ADDING THE uID to save the data in '/notes/UIDofTHEuser'
    fetchFavorites('postNotes', `https://starwars-9376c-default-rtdb.europe-west1.firebasedatabase.app/notes/${uID}.json`, note)
      .then(res => {
        // console.log(res); //add validation in case the answer is not OK!!!
        dispatch(fetchAndSetNotes(uID));//re-setting (getting the updated data) data to store so the "Favorites" component gets re-rendered
        setKey(currentKey => currentKey+1); //update the key so this component gets re-rendered
      });
  }

  return (
    <form onSubmit={submitHandler} key={key}> {/**set the key prop so when updated the component re-renders */}
      <div className={classes.control}>
        <label htmlFor='title'>Summary</label>
        <input type='text' id='title' ref={summaryRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='opening-text'>Description</label>
        <textarea rows='5' id='opening-text' ref={descriptionRef}></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor='date'>P.S.</label>
        <input type='text' id='date' ref={psRef} />
      </div>
      <button>Add Note</button>
    </form>
  );
}

export default AddFavorite;
