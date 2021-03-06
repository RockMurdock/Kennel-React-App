import React from "react";
import "./Owner.css";

const OwnerCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./Ashley.jpg")} alt="Owner" />
        </picture>
        <h3>
          Name: <span className="content-ownername">{props.owner.name}</span>
        </h3>
        <button type="button" onClick={() => props.deleteOwner(props.owner.id)}>
          Remove Owner
        </button>
        <button
          type="button"
          onClick={() => props.history.push(`/owners/${props.owner.id}/edit`)}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default OwnerCard;
