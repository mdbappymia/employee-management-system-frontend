import { useEffect, useState } from "react";

const useData = () => {
  const [employees, setEmployees] = useState([]);
  const [emailCollection, setEmailCollection] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:5000/employees/${page}`)
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  }, [page]);
  return {
    employees,
    setEmailCollection,
    emailCollection,
    page,
    setPage,
  };
};

export default useData;
