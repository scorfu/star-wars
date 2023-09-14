import React from "react";
import AddFavorite from "../Components/Favorites/AddFavorite";
import UserProfile from "../Components/Profile/UserProfile";
import Favorites from '../Components/Favorites/Favorites';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from '../styles/styles/HomePage.module.css';

const HomePage = () => {

  return <React.Fragment>
    <div>
      TO DO:
    </div>
    <div>
      One Movies/ All Characters page has been clicked (and all characters have been set in the store) make a condition for them to be displayed on other pages
      <br />
      eg: "https://swapi.dev/api/people/1/"
      MOVIES page has a characters array that you do not display because they are API links("https://swapi.dev/api/people/1/"). Conditionally display them if you have them in the store, like once you went in AllCharacters page
    </div>
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