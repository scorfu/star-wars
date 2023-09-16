import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';
import classes from '../styles/styles/VehicleInfo.module.css';

function VehiclesInfo({ vehicle }) {
  return (
    <Card className={classes.vehicle_card}>
      <Card.Body className={classes.vehicle_card_body}>
        <Card.Title className={classes.vehicle_card_title}>{vehicle.name}</Card.Title>
        <Card.Text>
          {vehicle.model}
        </Card.Text>
        <Card.Text>
          Class: {vehicle.vehicle_class}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <Table striped bordered hover className={classes.vechicle_table} responsive>
          <thead>
            <tr>
              <th>Consumables</th>
              <th>Max Cargo</th>
              <th>Crew</th>
              <th>Passengers</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{vehicle.consumables}</td>
              <td>{vehicle.cargo_capacity === 'unknown' ? vehicle.cargo_capacity : new Intl.NumberFormat("en-US").format(vehicle.cargo_capacity)}</td>
              <td>{vehicle.crew}</td>
              <td>{vehicle.passengers}</td>
            </tr>
          </tbody>
        </Table>
        <ListGroup.Item>Cost in credits: {vehicle.cost_in_credits === 'unknown' ? vehicle.cost_in_credits : new Intl.NumberFormat("en-US").format(vehicle.cost_in_credits)}</ListGroup.Item>
        <ListGroup.Item>Length in meters: {vehicle.length}</ListGroup.Item>
        <ListGroup.Item>Max atmosphere speed: {vehicle.max_atmosphering_speed}</ListGroup.Item>
      </ListGroup>
      <Card.Body className={classes.vehicle_card_body}>
        <Card.Text >Manufacturer: {vehicle.manufacturer}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default VehiclesInfo;