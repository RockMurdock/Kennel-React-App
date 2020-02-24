import React from "react";

const LocationCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./nashville.jpg")} alt="Location" />
        </picture>
        <h3>
          City: <span className="card-locationname">Nashville</span>
        </h3>
      </div>
    </div>
  );
};

export default LocationCard;