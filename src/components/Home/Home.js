import React from "react";
import { Button, Container, Spinner, Table } from "react-bootstrap";
import useStore from "../../hooks/useStore";
import EmployeeRow from "../EmployeeRow/EmployeeRow";
import { Link } from "react-router-dom";

const Home = () => {
  const { employees, page, setPage, isLoading } = useStore();

  if (isLoading) {
    return (
      <div className="text-center">
        <Spinner animation="border" />
      </div>
    );
  }
  return (
    <Container>
      <h1 className="text-center my-5">
        <span className="border-bottom border-2 border-info">
          EMPLOYEE LIST
        </span>
      </h1>
      <div className="mb-3 d-flex justify-content-end">
        <Link to="/sendEmail">
          <Button>
            <i className="far fa-envelope"></i> Send Email Selected Employee
          </Button>
        </Link>
      </div>
      {!employees.length ? (
        <div>
          <h1 className="text-center">End of result</h1>
        </div>
      ) : (
        <>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, i) => (
                <EmployeeRow key={employee.id} employee={employee} i={i} />
              ))}
            </tbody>
          </Table>
        </>
      )}
      <div className="pagination my-5 d-flex justify-content-center">
        <Button
          className="btn-sm me-2"
          disabled={page === 0}
          onClick={() => setPage(page - 1)}
        >
          <i className="fas fa-arrow-circle-left"></i> Previous
        </Button>
        <Button
          disabled={employees.length !== 5}
          onClick={() => setPage(page + 1)}
        >
          Next <i className="fas fa-arrow-circle-right"></i>
        </Button>
      </div>
    </Container>
  );
};

export default Home;
