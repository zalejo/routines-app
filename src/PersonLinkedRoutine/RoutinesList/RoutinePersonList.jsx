import { RoutinePersonContainer } from "./RoutinePersonContainer";

export function RoutinePersonList({ selectedPersonId, people, setPeople }) {
  return (
    <RoutinePersonContainer
      selectedPersonId={selectedPersonId}
      people={people}
      setPeople={setPeople}
    />
  );
}
