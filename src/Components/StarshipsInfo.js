import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';
import classes from '../styles/styles/StarshipInfo.module.css';

const StarshipsInfo = ({ starship }) => {
    return (
        <Card className={classes.starship_card}>
            <Card.Body className={classes.starship_card_body}>
                <Card.Title className={classes.starship_card_title}>{starship.name}</Card.Title>
                <Card.Text>
                    {starship.model}
                </Card.Text>
                <Card.Text>
                    Class: {starship.starship_class}
                </Card.Text>
            </Card.Body>
            <ListGroup className={`list-group-flush ${classes.starship_tableLine}`}>
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
            <Card.Body className={classes.starship_card_body}>
                <Card.Text>Lenght in meters: {starship.length === 'unknown' ? starship.length : new Intl.NumberFormat("en-US").format(starship.length)}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default StarshipsInfo;