import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';

function SpeciesInfo({species}) {
  return (
    <Container fluid>
      <Row>
        <Col>{species.name}</Col>
      </Row>
      <Row>
        <Col>Class: {species.classification}, {species.designation}</Col>
        <Col><Image src="" roundedCircle /></Col>
        <Col>Language: {species.language}</Col>
      </Row>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Average height (cm)</th>
          <th>Average lifespan</th>
          <th>Eye Colors</th>
          <th>Hair color</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{species.average_height}</td>
          <td>{species.average_lifespan}</td>
          <td /**colSpan={2} */ >{species.eye_colors}</td>
          <td>{species.hair_colors}</td>
        </tr>
      </tbody>
    </Table>
    <hr/>
    <hr/>
    </Container>
  );
}

export default SpeciesInfo;