import React from "react";
import { useForm } from "react-hook-form";
import { Button, Container } from "react-bootstrap";
import "./InsertEmployee.css";
import InsertEmployeeCSV from "../InsertEmployeeCSV/InsertEmployeeCSV";

const InsertEmployee = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    const isAdded = window.confirm("Are you sure added this employee?");
    if (isAdded) {
      fetch("http://localhost:5000/employee", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.affectedRows) {
            alert("Employee added successfully");
            reset();
          }
        });
    }
  };

  return (
    <Container>
      <div className="w-100 w-lg-50 insert-employee-form-container">
        <h1 className="text-center my-5">Insert a new employee</h1>
        <form className="form-control" onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="First name"
            className="form-control"
            {...register("firstName", { required: true })}
          />
          {errors.firstName && (
            <span className="text-danger">This field is required</span>
          )}
          <input
            placeholder="Last name"
            className="form-control"
            {...register("lastName", { required: true })}
          />
          {errors.lastName && (
            <span className="text-danger">This field is required</span>
          )}
          <input
            placeholder="Email"
            type="email"
            className="form-control"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-danger">This field is required</span>
          )}

          <br />
          <Button variant="primary" type="submit">
            Insert Employee
          </Button>
        </form>
        <div className="w-lg-50 w-100 my-5 m-auto">
          <p className="or mb-5 fs-4">
            <span>or</span>
          </p>
          <InsertEmployeeCSV />
        </div>
      </div>
    </Container>
  );
};
export default InsertEmployee;
