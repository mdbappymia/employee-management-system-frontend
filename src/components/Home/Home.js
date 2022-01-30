import React from "react";
import { Button, Container, Table } from "react-bootstrap";
import useStore from "../../hooks/useStore";
import EmployeeRow from "../EmployeeRow/EmployeeRow";
import { Link } from "react-router-dom";

const Home = () => {
  const { employees, page, setPage } = useStore();

  return (
    <div>
      <Container>
        <h1>This is home</h1>
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
        <div className="pagination">
          <button disabled={page === 0} onClick={() => setPage(page - 1)}>
            Previous
          </button>
          <button
            disabled={!employees.length}
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
        <div>
          <Link to="/sendEmail">
            <Button variant="primary">Send Email Selected Employee</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Home;
