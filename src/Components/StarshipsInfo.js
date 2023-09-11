import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';

const StarshipsInfo = ({ starship }) => {
    return (
    <Card style={{ width: '30rem'}}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
                <Card.Title>{starship.name}</Card.Title>
                <Card.Text>
                    {starship.model}
                </Card.Text>
                <Card.Text>
                    Class: {starship.starship_class}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>MGLT</th>
                            <th>Consumables</th>
                            <th>Max Cargo</th>
                            <th>Crew</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{starship.MGLT}</td>
                            <td>{starship.consumables}</td>
                            <td>{starship.cargo_capacity === 'unknown' ? starship.cargo_capacity : new Intl.NumberFormat("en-US").format(starship.cargo_capacity)}</td>
                            <td>{starship.crew}</td>
                        </tr>
                    </tbody>
                </Table>
                <ListGroup.Item>Cost in credits: {starship.cost_in_credits === 'unknown' ? starship.cost_in_credits : new Intl.NumberFormat("en-US").format(starship.cost_in_credits)}</ListGroup.Item>
                <ListGroup.Item>Hyperdrive rating: {starship.hyperdrive_rating
                }</ListGroup.Item>
                <ListGroup.Item>Max atmosphere speed: {starship.max_atmosphering_speed}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Text>Lenght in meters: {starship.length === 'unknown' ? starship.length : new Intl.NumberFormat("en-US").format(starship.length)}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default StarshipsInfo;