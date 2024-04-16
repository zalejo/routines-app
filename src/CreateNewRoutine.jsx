import { FormRoutine } from "./FormRoutine/FormRoutine";

export function CreateNewRoutine(props) {
  return (
    <FormRoutine
      exerciseVisible={props.exerciseVisible}
      data={props.data}
      groups={props.groups}
      appendRoutine={props.appendRoutine}
    />
  );
}
