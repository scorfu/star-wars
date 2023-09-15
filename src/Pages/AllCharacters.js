import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import CharacterInfo from "../Components/CharacterInfo";
import { setCharactersCurently, fetchAndSetCharacters, setCurrentPage, setCurrentPageNumber, setIsLoading } from "../features/starWarsCharactersSlice";


const AllCharacters = () => {
    const dispatch = useDispatch();
    const charactersCurrently = useSelector(state => state.characters.charactersCurrently);
    const currentPage = useSelector(state => state.characters.currentPage);
    const currentPageNumber = useSelector(state => state.characters.currentPageNumber);
    const charactersByPage = useSelector(state => state.characters.charactersByPage);
    const isLoading = useSelector(state => state.characters.isLoading);
    const URLtoAdd = 'https://swapi.dev/api/people/?page=';

    const pageHandler = (direction) => {
        const targetPageNumber = currentPageNumber + direction;
        const targetPageData = Object.keys(charactersByPage).find(pageNo => pageNo == targetPageNumber);

        if (targetPageNumber < 1 || targetPageNumber > 9) {
            console.log('Target ', targetPageNumber);
            console.log('Current', currentPageNumber);
            console.log('No more pages');
            return;
        }
        if (targetPageData) {
            // console.log(`Page ${direction > 0 ? 'next' : 'previous'} exists: ${targetPageData}`);
            dispatch(setCharactersCurently(charactersByPage[targetPageData]));
            dispatch(setCurrentPageNumber(targetPageNumber));
            dispatch(setCurrentPage(URLtoAdd + targetPageNumber));
            dispatch(setIsLoading(false));
        } else {
            // console.log('Current page:', currentPage);
            // console.log('Current page number:', currentPageNumber);
            // console.log(`Page ${direction > 0 ? 'next' : 'previous'} number: ${targetPageNumber}`);
            // console.log(`URL ${direction > 0 ? 'next' : 'previous'}: ${URLtoAdd + targetPageNumber}`);
            dispatch(fetchAndSetCharacters(URLtoAdd + targetPageNumber));
            dispatch(setCurrentPageNumber(targetPageNumber));
            dispatch(setCurrentPage(URLtoAdd + targetPageNumber));
            dispatch(setIsLoading(true));
        }
    };

    useEffect(() => {
        if (!Object.keys(charactersByPage)[0]) {
            dispatch(fetchAndSetCharacters(currentPage));
        }
    }, []);

    return (
        <React.Fragment>
            <h1>All Characters</h1>
            <div>
                {isLoading
                    ?
                    <div className="spinner-border" role="status"></div>
                    :
                    <React.Fragment>
                        <div className='backNext-container'>
                            {currentPageNumber === 1 ? <button>End</button> : <button onClick={() => pageHandler(-1)} >Back </button>}
                            <span>{currentPageNumber}</span>
                            {currentPageNumber === 9 ? <button>End</button> : <button onClick={() => pageHandler(1)}>Next</button>}
                        </div>
                        {charactersCurrently.map((character, index) => <CharacterInfo character={character} key={character.name} index={index}></CharacterInfo>)}
                    </React.Fragment>}
            </div>
        </React.Fragment>
    )
}

export default AllCharacters;