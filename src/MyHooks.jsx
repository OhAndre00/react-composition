import FilteredList from "./FilteredList";
import useControlledForm from "./useControlledForm";
import useCounter from "./useCounter";
import useCurrentLocation from "./useCurrentLocation";
import useGithubUser from "./useGithubUser";

export default function MyHooks({ initalValue = 0 }) {
  const { counter, increment, decrement, reset } = useCounter(initalValue);

  const { username, password, handleUsernameChange, handlePasswordChange } =
    useControlledForm();

  const user = useGithubUser("treno");

  // const { location, error, loading, getLocation } = useCurrentLocation();

  // if (loading) {
  //   return <p>Caricamento...</p>;
  // }

  // if (error) {
  //   return <p>Errore: {error}</p>;
  // }

  // if (!location) {
  //   return <p>Non è stato possibile recuperare la posizione attuale.</p>;
  // }

  const people = [
    { id: 1, name: "Andrea", age: 24 },
    { id: 2, name: "Claudio", age: 16 },
    { id: 3, name: "Giuseppe", age: 32 },
    { id: 4, name: "Paolo", age: 17 },
  ];

  return (
    <div>
      <div>
        <h2>Counter: {counter}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
      {/* <div>
        <form>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
          <br />
          <button type="submit">Invia</button>
        </form>
      </div>
      <div>
        <h1>{user.name}</h1>
      </div> */}
      {/* <div>
        <h1>Posizione attuale:</h1>
        <p>Latitudine: {location.latitude}</p>
        <p>Longitudine: {location.longitude}</p>
        <p>Accuratezza: {location.accuracy} metri</p>
        <button onClick={getLocation}>Aggiorna posizione</button>
      </div> */}
      <div>
        <h1>Filtered List: </h1>
        <FilteredList list={people} />
      </div>
    </div>
  );
}
