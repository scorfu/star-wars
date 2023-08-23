import Navbar from "../Components/Navbar"
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect } from "react";
import { fetchAndSetCharacters } from "../features/starWarsCharactersSlice";

import CharacterInfo from "../Components/CharacterInfo";

const Characters  = () => {
    const dispatch = useDispatch();
    const allCharacters = useSelector(state => state.characters.characters);
    const nextPage = useSelector(state => state.characters.nextPage);
    const previousPage = useSelector(state => state.characters.previousPage)

    const fetchCharactersIfNeeded = useCallback(() => {
        if (allCharacters.length === 0) {
            // Data is not in the Redux store, so fetch it
            dispatch(fetchAndSetCharacters())
        }
    }, []);

    useEffect(() => {
        let isCancelled = false;
        if (!isCancelled) {
            fetchCharactersIfNeeded();
        }
        return () => {
            isCancelled = true;
        }
    }, [fetchCharactersIfNeeded]);
    console.log(allCharacters);
    console.log(nextPage);
    console.log(previousPage);
    return <>
    <Navbar></Navbar>
    <p>Characters</p>
    <button>Prev</button>
    <button>Next</button>
    {allCharacters.map(character => <CharacterInfo character={character} key={character.name}></CharacterInfo>)}

    </>
}

export default Characters