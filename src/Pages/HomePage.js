import AddFavorite from "../Components/Favorites/AddFavorite";
import UserProfile from "../Components/Profile/UserProfile";

import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from '../styles/styles/HomePage.module.css';

const HomePage = () => {

  return <>
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header className={classes.home_accordion_header}>Profile Info</Accordion.Header>
        <Accordion.Body className={classes.home_accordion_body}>
          <UserProfile />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header className={classes.home_accordion_header}>Add a favourite</Accordion.Header>
        <Accordion.Body className={classes.home_accordion_body}>
        <AddFavorite></AddFavorite>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header className={classes.home_accordion_header}>Favourites</Accordion.Header>
        <Accordion.Body className={classes.home_accordion_body}>
        <div>Favorites</div>
        <div>Favorites</div>
        <div>Favorites</div>
        <div>Favorites</div>
        <div>Favorites</div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>


    <p>Hello from HomePage</p>
    <p>Page under construction/ website only used to test API GET calls</p>


  </>
}

export default HomePage;