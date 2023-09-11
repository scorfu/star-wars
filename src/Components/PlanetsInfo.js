import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';

const PlanetsInfo = ({ planet }) => {
    const pop = planet.population.toLocaleString('en-US')
    return (
        <Accordion defaultActiveKey="1" flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header>{planet.name}</Accordion.Header>
                <Accordion.Body>
                    <div>Appeared in {planet.films.length} from the 6 original movies</div>
                    <div>Planet residents that have appeared in movies: {planet.residents.length}</div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Climate</th>
                                <th>Terrain</th>
                                <th>Suraface water</th>
                                <th>Diameter (km)</th>
                                <th>Gravity</th>
                                <th>Orbital Period</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{planet.climate}</td>
                                <td>{planet.terrain}</td>
                                <td>{planet.surface_water === 'unknown' ? planet.surface_water : `${planet.surface_water}%`}</td>
                                <td>{planet.diameter == 'unknown' ? planet.diameter : new Intl.NumberFormat("en-US").format(planet.diameter)}</td>
                                <td>{planet.gravity}</td>
                                <td>{planet.orbital_period === 'unknown' ? planet.orbital_period : `${planet.orbital_period} rotations`}</td>
                            </tr>
                            <tr>
                                <td colSpan={3}>Population: {planet.population === 'unknown' ? planet.population : new Intl.NumberFormat("en-US").format(planet.population)}</td>
                                <td colSpan={3}>Rotation period in hours: {planet.rotation_period}</td>
                            </tr>

                        </tbody>
                    </Table>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default PlanetsInfo;