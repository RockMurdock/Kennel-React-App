import React from "react";

const OwnerCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./Ashley.jpg")} alt="Owner" />
        </picture>
        <h3>
          Name: <span className="card-ownername">Ashley</span>
        </h3>
      </div>
    </div>
  );
};

export default OwnerCard;