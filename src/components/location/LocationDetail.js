import React, { useState, useEffect } from "react";
import LocationManager from "../../modules/LocationManager";
import EmployeeCard from "../employee/EmployeeCard";
import EmployeeManager from "../../modules/EmployeeManager";
import "./LocationDetail.css";

const LocationDetail = props => {
  const [employees, setEmployee] = useState([]);
  const [kennelLocation, setLocation] = useState({ name: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    LocationManager.getWithEmployees(props.match.params.locationId).then(
      APIResult => {
        setLocation(APIResult);
        setEmployee(APIResult.employees);
      }
    );
  }, []);

  const deleteEmployee = id => {
    EmployeeManager.delete(id).then(() => props.history.push(`/locations`));
  };

  const handleDelete = () => {
    //invoke the delete function in LocationManger and re-direct to the location list.
    setIsLoading(true);
    LocationManager.delete(props.locationId).then(() =>
      props.history.push("/locations")
    );
  };

  return (
    <div className="card">
      <p>Location: {kennelLocation.name}</p>
      {employees.map(employee => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
          deleteEmployee={deleteEmployee}
          {...props}
        />
      ))}
    </div>
  );
};

export default LocationDetail;
