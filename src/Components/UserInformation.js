import React from "react";

export const UserInformation = ({ user }) => {
  return (
    <div className="informationContainer">
      <div>
        <img src={user.avatarUrl} />
      </div>

      <h3>{user.name}</h3>
      <p>{user.location}</p>
      <p>{user.numberOfRepos}</p>
      <p>{user.followers}</p>
    </div>
  );
};
