import React from "react";
import useResources from "../hooks/useResources";

const UsersList = () => {
  const users = useResources("users");
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UsersList;
