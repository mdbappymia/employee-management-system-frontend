import React, { useState } from "react";
import useStore from "../../hooks/useStore";

const EmployeeRow = ({ employee, i }) => {
  const { emailCollection, setEmailCollection } = useStore();
  const { firstName, lastName, email } = employee;
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = (e) => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      //   console.log(e.target.value);
      setEmailCollection([...emailCollection, e.target.value]);
    } else {
      const remain = emailCollection.filter(
        (email) => email !== e.target.value
      );
      setEmailCollection(remain);
    }
  };
  return (
    <tr>
      <td>{i + 1}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{email}</td>
      <td>
        <input
          type="checkbox"
          checked={emailCollection.find((e) => e === email)}
          onChange={handleOnChange}
          value={email}
        />
      </td>
    </tr>
  );
};

export default EmployeeRow;
