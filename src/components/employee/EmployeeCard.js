import React from "react";
import "./Employee.css";

const EmployeeCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./employee1.jpg")} alt="Employee" />
        </picture>
        <h3>
          Name:{" "}
          <span className="content-employeename">{props.employee.name}</span>
        </h3>
      </div>
    </div>
  );
};

export default EmployeeCard;
