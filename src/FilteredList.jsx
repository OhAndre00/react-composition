import { useMemo } from "react";

export default function FilteredList({ list }) {
  const filteredList = useMemo(() => {
    return list.filter((person) => person.age > 18);
  }, [list]);

  return (
    <ul>
      {filteredList.map((person) => (
        <li key={person.id}>
          {person.name} - Age: {person.age}
        </li>
      ))}
    </ul>
  );
}
