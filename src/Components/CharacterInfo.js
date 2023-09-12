import Accordion from 'react-bootstrap/Accordion';


const CharacterInfo = ({ character }) => {
    return <>
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>{character.name}</Accordion.Header>
                <Accordion.Body>
                    <p>Born in: {character.birth_year}</p>
                    <p>Gender: {character.gender}</p>
                    <p>Appeared in: {character.films.length} {character.films.length === 1 ? 'movie' : 'movies'}</p>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className='opacity-75'>Traits</Accordion.Header>
                            <Accordion.Body className='text-primary-emphasis'>
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