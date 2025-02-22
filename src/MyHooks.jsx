import useControlledForm from "./useControlledForm";
import useCounter from "./useCounter";
import useCurrentLocation from "./useCurrentLocation";
import useGithubUser from "./useGithubUser";

export default function MyHooks({ initalValue = 0 }) {
  const { counter, onIncrement, onDecrement, onReset } =
    useCounter(initalValue);

  const { username, password, handleUsernameChange, handlePasswordChange } =
    useControlledForm();

  const user = useGithubUser("treno");

  const { location, error, loading, getLocation } = useCurrentLocation();

  if (loading) {
    return <p>Caricamento...</p>;
  }

  if (error) {
    return <p>Errore: {error}</p>;
  }

  if (!location) {
    return <p>Non è stato possibile recuperare la posizione attuale.</p>;
  }

  return (
    <div>
      {/* <div>
        <h2>Counter: {counter}</h2>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
        <button onClick={onReset}>Reset</button>
      </div>
      <div>
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
      <div>
        <h1>Posizione attuale:</h1>
        <p>Latitudine: {location.latitude}</p>
        <p>Longitudine: {location.longitude}</p>
        <p>Accuratezza: {location.accuracy} metri</p>
        <button onClick={getLocation}>Aggiorna posizione</button>
      </div>
    </div>
  );
}
