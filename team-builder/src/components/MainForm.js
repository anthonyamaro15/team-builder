import React from "react";

const MainForm = ({ handleChange, users, handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={users.name}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={users.email}
          />
        </label>
        <label>
          Role:
          <input
            type="text"
            name="role"
            onChange={handleChange}
            value={users.role}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MainForm;
