import React, { useState, useEffect } from "react";

export default function GithubUser({ username }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [username]);

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.login}</p>
      <img src={user.avatar_url} alt={user.login} />
    </div>
  );
}
