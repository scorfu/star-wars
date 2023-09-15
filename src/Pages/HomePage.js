import React from "react";
import AddFavorite from "../Components/Favorites/AddFavorite";
import UserProfile from "../Components/Profile/UserProfile";
import Favorites from '../Components/Favorites/Favorites';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from '../styles/styles/HomePage.module.css';

const HomePage = () => {

  return <React.Fragment>
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
          <Favorites>Favorites</Favorites>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </React.Fragment>
}

export default HomePage;