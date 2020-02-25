import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalCard from "./animal/AnimalCard";
//only include these once they are built - previous practice exercise
import AnimalList from "./animal/AnimalList"
import EmployeeList from "./employee/EmployeeList"
import OwnerList from "./owner/OwnerList"
import LocationList from "./location/LocationList"


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
        path="/animals"
        render={props => {
          return <AnimalList />;
        }}
      />
      <Route
        path="/employee"
        render={props => {
          return <EmployeeList />;
        }}
      />
      <Route
        path="/owner"
        render={props => {
          return <OwnerList/>;
        }}
      />
      <Route
        path="/location"
        render={props => {
          return <LocationList />;
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;
