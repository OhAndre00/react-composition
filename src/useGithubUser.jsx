import { useState, useEffect } from "react";

export default function useGithubUser(username) {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [username]);

  return user;
}
