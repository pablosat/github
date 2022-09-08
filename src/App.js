import { useEffect, useState } from "react";
import { UserInformation } from "./Components/UserInformation";
import "./styles.css";

export default function App() {
  const [user, setUser] = useState({});
  useEffect(() => {
    const getUserInfo = async () => {
      const data = await (await fetch("https://api.github.com/users/psat93")).json();
      console.log(data);
      const {
        followers,
        public_repos: numberOfRepos,
        name,
        location,
        avatar_url: avatarUrl
      } = data;

      setUser({
        name,
        location,
        numberOfRepos,
        followers,
        avatarUrl
      });
    };
    getUserInfo();
  }, []);
  return (
    <div className="App">
      <h1>Github User Searcher</h1>
      <div>
        <input className="input" />
      </div>
      <UserInformation user={user} />
    </div>
  );
}
