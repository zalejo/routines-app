import { Box } from "@mui/material";
import { PersonList } from "./PeopleList/PersonList";
import { RoutinePersonList } from "./RoutinesList/RoutinePersonList";

export function PersonLinkedRoutine(props) {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <PersonList
          people={props.people}
          deletePerson={props.deletePerson}
          selectedPersonId={props.selectedPersonId}
          setSelectedPersonId={props.setSelectedPersonId}
        />
        <RoutinePersonList
          selectedPersonId={props.selectedPersonId}
          people={props.people}
          setPeople={props.setPeople}
        />
      </Box>
    </>
  );
}
