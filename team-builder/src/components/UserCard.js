import React from "react";

const UserCard = ({ user, memberToEdit }) => {
  return (
    <div onClick={memberToEdit}>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.role}</p>
    </div>
  );
};

export default UserCard;
