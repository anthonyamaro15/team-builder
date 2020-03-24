import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import MainForm from "./components/MainForm";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState({ name: "", email: "", role: "" });

  const handleChange = e => {
    const values = { ...users, [e.target.name]: e.target.value };
    setUsers(values);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newUsers = {
      ...users,
      id: uuidv4(),
      name: users.name,
      email: users.email,
      role: users.role
    };

    setData([...data, newUsers]);
    setUsers({ name: "", email: "", role: "" });
  };

  return (
    <div className="App">
      <MainForm
        handleChange={handleChange}
        users={users}
        handleSubmit={handleSubmit}
      />
      {data.map(user => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.role}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
