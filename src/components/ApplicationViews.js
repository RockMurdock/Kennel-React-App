import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalCard from "./animal/AnimalCard";
//only include these once they are built - previous practice exercise
import AnimalList from "./animal/AnimalList";
import EmployeeList from "./employee/EmployeeList";
import OwnerList from "./owner/OwnerList";
import LocationList from "./location/LocationList";
import AnimalDetail from "./animal/AnimalDetail"
import LocationDetail from "./location/LocationDetail"

const ApplicationViews = () => {
  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={props => {
          return <Home />;
        }}
      />
      <Route
        exact
        path="/animals"
        render={props => {
          return <AnimalList />;
        }}
      />
      <Route
        path="/animals/:animalId(\d+)"
        render={props => {
          // Pass the animalId to the AnimalDetailComponent
          return (
            <AnimalDetail animalId={parseInt(props.match.params.animalId)}
            {...props} />
          );
        }}
      />

      {/*
  This is a new route to handle a URL with the following pattern:
  http://localhost:3000/animals/1

  It will not handle the following URL because the `(\d+)`
  matches only numbers after the final slash in the URL
  http://localhost:3000/animals/jack
*/}
      <Route
        path="/employee"
        render={props => {
          return <EmployeeList />;
        }}
      />
      <Route
        path="/owner"
        render={props => {
          return <OwnerList />;
        }}
      />
      <Route
        exact path="/location"
        render={props => {
          return <LocationList />;
        }}
      />
      <Route path="/locations/:locationId(\d+)" render={(props) => {
  // Pass the locationId to the LocationDetailComponent
  return <LocationDetail locationId={parseInt(props.match.params.locationId)}
  {...props}/>
}} />
    </React.Fragment>
  );
};

export default ApplicationViews;
