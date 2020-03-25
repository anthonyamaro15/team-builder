import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import MainForm from "./components/MainForm";
import UserCard from "./components/UserCard";

function App() {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState({ name: "", email: "", role: "" });
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    console.log("user changing..");
  }, [users]);

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

    if (users.name === "" || users.email === "" || users.role === "") {
      return alert("values cannot be empty");
    }

    setData([...data, newUsers]);
    setUsers({ name: "", email: "", role: "" });
    setIsUser(true);
  };

  const memberToEdit = id => {
    const selected = data.find(user => user.id === id);
    const obj = {
      id,
      name: selected.name,
      email: selected.email,
      role: selected.role
    };
    const removed = data.filter(user => user.id !== id);
    setUsers(obj);
    setData(removed);
  };

  return (
    <div className="App">
      <MainForm
        handleChange={handleChange}
        users={users}
        handleSubmit={handleSubmit}
      />
      {isUser ? <h1>Team members</h1> : ""}
      {data.map(user => (
        <UserCard
          key={user.id}
          user={user}
          memberToEdit={() => memberToEdit(user.id)}
        />
      ))}
    </div>
  );
}

export default App;
