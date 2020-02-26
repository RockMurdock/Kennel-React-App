import React from "react";
import "./Location.css"

const LocationCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./nashville.jpg")} alt="Location" />
        </picture>
        <h3>
          City: <span className="content-locationname">{props.location.name}</span>
        </h3>
        <button type="button" onClick={() => props.deleteLocation(props.location.id)}>Close Location</button>
      </div>
    </div>
  );
};

export default LocationCard;