import { RoutineInterface } from "./Routine/RoutineInterface";

export function FormRoutine(props) {
  return (
    <>
      {
        <RoutineInterface
          data={props.data}
          groups={props.groups}
          appendRoutine={props.appendRoutine}
        />
      }
    </>
  );
}
