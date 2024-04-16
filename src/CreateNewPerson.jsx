import { FormNewPerson } from "./FormPerson/FormNewPerson";

export function CreateNewPerson(props) {
  return <FormNewPerson onClickAddPerson={props.addPerson} isHidden={false} />;
}
