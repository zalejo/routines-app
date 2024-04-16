import { PersonLinkedRoutine } from "./PersonLinkedRoutine/PersonLinkedRoutine";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";

export function PeopleRoutinesLayout(props) {
  function showExercises(e) {
    if (!props.selectedPersonId) {
      e.preventDefault();
      return alert("¡Elegir una persona de la lista!");
    }
  }
  return (
    <>
      <Link to={"/"}>
        <Button>Home</Button>
      </Link>
      <Link to={props.selectedPersonId ? "/newRoutine" : "#"}>
        <Button
          sx={{ backgroundColor: "darkorchid" }}
          variant="contained"
          size="small"
          onClick={showExercises}
        >
          New Routine
        </Button>
      </Link>

      <Button
        sx={{ position: "relative", alignSelf: "right" }}
        variant="text"
        size="small"
        onClick={props.handleLoadExercises}
      >
        Load Exercises
      </Button>
      <input
        hidden
        id="fileInput"
        type="file"
        onChange={props.loadExercises}
      ></input>
      <PersonLinkedRoutine
        people={props.people}
        setPeople={props.setPeople}
        deletePerson={props.deletePerson}
        selectedPersonId={props.selectedPersonId}
        setSelectedPersonId={props.setSelectedPersonId}
      />
    </>
  );
}
