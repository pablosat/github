import React from "react";

const NOT_FOUND_IMG_URL = "https://cdn-icons-png.flaticon.com/512/4539/4539472.png";

export const UserInformation = ({ user }) => {
  const { notFound, userName, name, location, numberOfRepos, followers } = user;
  return (
    <div className="informationContainer">
      <img src={notFound ? NOT_FOUND_IMG_URL : user.avatarUrl} />
      {notFound ? (
        <>
          <h3>User not found</h3>
          <p> please search again...</p>
        </>
      ) : (
        <>
          <h3>{userName}</h3>
          <p>{name}</p>
          <p>{location}</p>
          <p>{`Public repositories: ${numberOfRepos}`}</p>
          <p>{`Followers: ${followers}`}</p>
        </>
      )}
    </div>
  );
};
