import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useCSVReader } from "react-papaparse";
import { styles } from "./styles";

const InsertEmployeeCSV = () => {
  const { CSVReader } = useCSVReader();
  const [csvFile, setCsvFile] = useState({});
  const [count, setCount] = useState({});

  const handleSubmitEmployees = () => {
    if (!csvFile.data?.length) {
      alert("Employee should not empty");
      return;
    }
    const isSubmit = window.confirm("Are you sure added all employee?");
    if (isSubmit) {
      setCount({});
      const generateData = [];
      let fail = 0;
      let success = 0;
      for (let data of csvFile.data) {
        if (!data[0] && !data[1] && !data[2]) {
          continue;
        }
        if (
          !data[0] ||
          !data[1] ||
          !data[2] ||
          /\S+@\S+\.\S+/.test(data[2]) === false
        ) {
          fail++;
        } else {
          success++;
          generateData.push([data[0], data[1], data[2]]);
        }
      }
      fetch("http://localhost:5000/employees", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(generateData),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.affectedRows) {
            alert("Employee added successfully");
            setCount({ fail, success });
            setCsvFile([]);
          }
        });
    }
  };
  return (
    <>
      {count.success || count.fail ? (
        <>
          <h2>Success: {count.success}</h2>
          <h2>Fail: {count.fail}</h2>
        </>
      ) : (
        ""
      )}
      <CSVReader
        onUploadAccepted={(results) => {
          setCsvFile(results);
        }}
      >
        {({ getRootProps, acceptedFile, ProgressBar, getRemoveFileProps }) => (
          <>
            <div style={styles.csvReader}>
              <button
                type="button"
                {...getRootProps()}
                style={styles.browseFile}
              >
                Browse CSV file
                <br />
                or
                <br />
                drag and drop
              </button>
              {csvFile?.data?.length ? (
                <div className="d-flex mt-2">
                  <div style={styles.acceptedFile}>
                    {acceptedFile && acceptedFile.name}
                  </div>
                  <Button
                    variant="danger"
                    {...getRemoveFileProps()}
                    style={styles.remove}
                    onClick={() => setCsvFile([])}
                  >
                    Remove
                  </Button>
                </div>
              ) : (
                ""
              )}
            </div>
            <ProgressBar style={styles.progressBarBackgroundColor} />
          </>
        )}
      </CSVReader>
      <div className="text-center mt-3">
        <Button onClick={handleSubmitEmployees}>
          <i className="fas fa-user-plus"></i> Insert
        </Button>
      </div>
    </>
  );
};

export default InsertEmployeeCSV;
