import React from "react";
import "./Location.css";
import { Link } from "react-router-dom";

const LocationCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./nashville.jpg")} alt="Location" />
        </picture>
        <h3>
          Location:{" "}
          <span className="content-locationname">{props.kennelLocation.name}</span>
        </h3>
        <button
          type="button"
          onClick={() => props.deleteLocation(props.kennelLocation.id)}
        >
          Close Location
        </button>
        <Link to={`/locations/${props.kennelLocation.id}`}>
          <button>Details</button>
        </Link>
        <button
          type="button"
          onClick={() => props.history.push(`/locations/${props.kennelLocation.id}/edit`)}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default LocationCard;
