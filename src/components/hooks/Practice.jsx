import { useState } from "react";

// const users = [
//   { name: "Imran", age: 24 },
//   { name: "Khan", age: 28 },
//   { name: "Ali", age: 30 },
//   { name: "Haider", age: 25 },
// ];
export const Practice = () => {
  const [users, setUsers] = useState([
    // { name: "Imran", age: 24 },
    { name: "Khan", age: 35 },
    { name: "Ali", age: 30 },
    { name: "Haider", age: 25 },
  ]);
  const userCount = users.length;
  const averageAge =
    users.reduce((accum, curElem) => accum + curElem.age, 0) / userCount;

  return (
    <div>
      <h1>User ist</h1>
      <ul>
        {users.map((curElem, index) => {
          return (
            <li key={index}>
              {curElem.name} - {curElem.age} year old
            </li>
          );
        })}
      </ul>
      <br />
      <p>Total Users: {userCount}</p>
      <p>AverageAge: {averageAge}</p>
    </div>
  );
};
