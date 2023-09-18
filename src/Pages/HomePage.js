import React from "react";
import AddFavorite from "../Components/Favorites/AddFavorite";
import UserProfile from "../Components/Profile/UserProfile";
import Favorites from '../Components/Favorites/Favorites';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from '../styles/styles/HomePage.module.css';

const HomePage = () => {

  return <React.Fragment>
    <div>INFO/ Legend:</div>
    <div>The birth year of the person, using the in-universe standard of <b>BBY or ABY </b>- Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope.</div>
    <hr/>
    <div><b>Orbital Period</b> - The number of standard days (aka Rotations around it's own axis) it takes for this planet to complete a single orbit of its local star.</div>
    <div><b>Rotation Period</b> - The number of standard hours it takes for this planet to complete a single rotation on its axis.</div>
    <hr/>
    <div><b>MGLT</b> -The class of this starships hyperdrive.
MGLT string -- The Maximum number of Megalights this starship can travel in a standard hour. A "Megalight" is a standard unit of distance and has never been defined before within the Star Wars universe. This figure is only really useful for measuring the difference in speed of starships. We can assume it is similar to AU, the distance between our Sun (Sol) and Earth.</div>
    <div><b>Crew</b> - The number of personnel needed to run or pilot a starship/ vehicle.</div>
    <div><b>Max Cargo</b> - The maximum number of kilograms that a starship/ vehicle can transport.</div>
    <div><b>Consumables</b> - The maximum length of time that a starship/ vehicle can provide consumables for its entire crew without having to resupply.</div>
    <hr/>
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
    <div>Easter egg:</div>
    <div>Go to "Movies" page, looks nice, right? Now go to "Vehicles" and/ or "Starhips" page and have a look around.</div>
    <div>Now 🚀 and 🛸 have landed where they belong.</div>
  </React.Fragment>
  
}

export default HomePage;