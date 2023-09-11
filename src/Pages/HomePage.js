import UserProfile from "../Components/Profile/UserProfile";

import Accordion from 'react-bootstrap/Accordion';

const HomePage = () => {

  return <>
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Profile Info</Accordion.Header>
        <Accordion.Body>
          <UserProfile />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>


    <p>Hello from HomePage</p>
    <p>Page under construction/ website only used to test API GET calls</p>
  </>
}

export default HomePage;