import React from "react";
import { FaEdit } from "react-icons/fa";

const UserCard = ({ user, memberToEdit }) => {
  return (
    <div>
      <div className="card-container">
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
        </div>
        <span className="icon" onClick={memberToEdit}>
          <FaEdit />
        </span>
      </div>
    </div>
  );
};

export default UserCard;
