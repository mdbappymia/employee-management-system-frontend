import { useEffect, useState } from "react";

const useData = () => {
  const [employees, setEmployees] = useState([]);
  const [emailCollection, setEmailCollection] = useState([]);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/employees/${page}`)
      .then((res) => res.json())
      .then((data) => setEmployees(data))
      .finally(() => {
        setIsLoading(false);
      });
  }, [page]);
  return {
    employees,
    setEmailCollection,
    emailCollection,
    page,
    setPage,
    isLoading,
  };
};

export default useData;
