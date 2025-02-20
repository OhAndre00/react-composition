import React, { useState } from "react";
import GithubUser from "./GithubUser";

export default function GithubUsers() {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => setUsers([data]))
      .catch((error) => console.error(error));
  };

  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <form onSubmit={handleSubmit} className="flex gap-2 p-2">
        <input
          className="border p-2 rounded-lg"
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="GitHub username"
        />
        <button className="border rounded-lg p-2 bg-blue-400" type="submit">
          Search
        </button>
      </form>
      <ul>
        {users.map((user) => (
          <GithubUser key={user.login} username={user.login} />
        ))}
      </ul>
    </div>
  );
}
