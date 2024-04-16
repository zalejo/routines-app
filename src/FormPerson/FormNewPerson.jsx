import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import { Box } from "@mui/material";

export function FormNewPerson({ onClickAddPerson, isHidden }) {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [age, setAge] = useState(null);
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [startDate, setStartDate] = useState(null);

  function handleClick(e) {
    e.preventDefault();

    if (!firstName || !lastName || !age || !weight || !height || !startDate) {
      return;
    }

    const newPerson = [firstName, lastName, age, weight, height, startDate];

    onClickAddPerson(...newPerson);
    setFirstName(null);
    setLastName(null);
    setAge(null);
    setWeight(null);
    setHeight(null);
    setStartDate(null);
  }
  let history = useHistory();

  return (
    <form id="inputFields" hidden={isHidden}>
      <Button onClick={() => history.push("/")}>Home</Button>
      <Box>
        <TextField
          required
          type="text"
          id="outlined-required"
          label="Nombre"
          value={firstName || ""}
          style={{ backgroundColor: "white" }}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          required
          type="text"
          id="outlinfed-required"
          label="Apellido"
          value={lastName || ""}
          style={{ backgroundColor: "white" }}
          onChange={(e) => setLastName(e.target.value)}
        />
        <TextField
          required
          type="number"
          id="outlined-required"
          label="Edad"
          value={age || ""}
          style={{ backgroundColor: "white" }}
          onChange={(e) => setAge(e.target.value)}
        />
        <TextField
          required
          type="number"
          id="outlined-required"
          label="Peso"
          value={weight || ""}
          style={{ backgroundColor: "white" }}
          onChange={(e) => setWeight(e.target.value)}
        />
        <TextField
          required
          type="number"
          id="outlined-required"
          label="Altura"
          value={height || ""}
          style={{ backgroundColor: "white" }}
          onChange={(e) => setHeight(e.target.value)}
        />
        <TextField
          required
          type="date"
          id="outlined-required"
          value={startDate || ""}
          style={{ backgroundColor: "white" }}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <Button
          variant="contained"
          color="success"
          sx={{ height: "25px", padding: "0px" }}
          onClick={handleClick}
        >
          Add
        </Button>
      </Box>
    </form>
  );
}
