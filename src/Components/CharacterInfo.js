import Accordion from 'react-bootstrap/Accordion';
// import { useState } from 'react';
import classes from '../styles/styles/CharacterInfo.module.css';

const CharacterInfo = ({ character, index }) => {
    // console.log(index);

    // const indexx = index === 0 ? index : '1';
    // const [activeKey, setActiveKey] = useState(null);
    // const handleAccordionClick = (eventKey) => {
    //     // Toggle the active event key when an Accordion.Header is clicked
    //     setActiveKey(activeKey === eventKey ? null : eventKey);
    //   };

    return <>
        <Accordion /*activeKey={activeKey} onSelect={handleAccordionClick}*/ >
            <Accordion.Item eventKey={index}>
                <Accordion.Header className={classes.character_accordion_header}>{character.name}</Accordion.Header>
                <Accordion.Body className={classes.character_accordion_body}>
                    <p>Born in: {character.birth_year}</p>
                    <p>Gender: {character.gender}</p>
                    <p>Appeared in: {character.films.length} {character.films.length === 1 ? 'movie' : 'movies'}</p>
                    <Accordion>
                        <Accordion.Item >
                            <Accordion.Header className={`opacity-75 ${classes.traits_accordion_header}`}>Traits</Accordion.Header>
                            <Accordion.Body className={`text-primary-emphasis ${classes.traits_accordion_body}`}>
                                <p>Eye color: {character.eye_color}</p>
                                <p>Hair: {character.hair_color}</p>
                                <p>Skin color: {character.skin_color}</p>
                                <p>Height: {character.height} cm</p>
                                <p>Weight: {character.mass} kg</p>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </>
}

export default CharacterInfo;