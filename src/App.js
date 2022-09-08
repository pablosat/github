import { useEffect, useState } from "react";
import { Input } from "./Components/Input";
import { UserInformation } from "./Components/UserInformation";
import "./styles.css";

const createGetUserInfo =
  (setUser) =>
  async (userName = "psat93") => {
    const rawResponse = await fetch(`https://api.github.com/users/${userName}`);
    const data = await rawResponse.json();
    console.log(data);
    const {
      followers,
      public_repos: numberOfRepos,
      name,
      location,
      avatar_url: avatarUrl,
      message
    } = data;
    const notFound = message === "Not Found";

    setUser({
      notFound,
      name,
      location,
      numberOfRepos,
      followers,
      avatarUrl,
      userName
    });
  };

export const App = () => {
  const [user, setUser] = useState({});
  const getUserInfo = createGetUserInfo(setUser);
  useEffect(() => {
    getUserInfo();
  }, []);
  return (
    <div className="App">
      <Input onSubmit={getUserInfo} />
      <UserInformation user={user} />
    </div>
  );
};
