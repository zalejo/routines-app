import { styled } from "@mui/system";
import { Box, Slider, TextField, Typography, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { NewRoutineTable } from "../NewRoutineTable";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Checkbox from "@mui/material/Checkbox";
import { useHistory } from "react-router-dom";

export function ExerciseData({ selectedRow, appendRoutine }) {
  const [dificultad, setDificultad] = useState(null);
  const [series, setSeries] = useState(0);
  const [repeticiones, setRepeticiones] = useState(0);
  const [peso, setPeso] = useState(0);
  const [isFallo, setIsFallo] = useState(false);
  const [specs, setSpecs] = useState({
    nameEjercicio: selectedRow.exercise,
    numSeries: series,
    numRepeticiones: repeticiones,
    numPeso: peso,
  });
  const [routine, setRoutine] = useState({
    id: crypto.randomUUID(),
    exercises: [],
    creationDate: new Date().toLocaleDateString(),
    difficulty: 0,
  });
  let history = useHistory();

  useEffect(() => {
    setSpecs({
      nameEjercicio: selectedRow.exercise,
      numSeries: series,
      numRepeticiones: repeticiones,
      numPeso: peso,
    });
  }, [series, repeticiones, peso, selectedRow.exercise]);

  const StyledTextField = styled(TextField)({
    border: "1px solid black",
    backgroundColor: "white",
  });
  const handleChangeSeries = (e, newValue) => {
    setSeries(newValue);
  };

  const handleChangeReps = (e, newValue) => {
    setRepeticiones(newValue);
  };
  const handleChangePeso = (e, newValue) => {
    setPeso(newValue);
  };

  const handleCheckbox = () => {
    if (isFallo) {
      setRepeticiones(1);
    } else {
      setRepeticiones("Fallo");
    }
    setIsFallo((prev) => !prev);
  };

  const handleAgregar = () => {
    setRoutine((prevRoutine) => {
      return {
        ...prevRoutine,
        exercises: [
          ...prevRoutine.exercises,
          {
            id: crypto.randomUUID(),
            ejercicio: selectedRow.exercise,
            serie: series,
            repeticion: repeticiones,
            weight: peso,
          },
        ],
      };
    });
  };

  const handleSaveClick = () => {
    if (!dificultad) return alert("¡Elegir dificultad de la rutina!");
    const updatedRoutine = { ...routine, difficulty: dificultad };
    appendRoutine(updatedRoutine);
    history.push("/people");
  };

  const diffArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleChange = (event) => {
    setDificultad(event.target.value);
  };
  return (
    <>
      <NewRoutineTable routine={routine} setRoutine={setRoutine} />
      <Box sx={{ display: "flex", paddingTop: "6px" }}>
        <StyledTextField
          id="fieldEjercicio"
          variant="standard"
          label="Ejercicio"
          value={selectedRow.exercise || ""}
          sx={{ width: "700px", borderRadius: "7px", paddingLeft: "3px" }}
        />
        <FormControl style={{ minWidth: "120px" }}>
          <InputLabel id="demo-simple-select-label">Dificultad</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={dificultad}
            label="Age"
            style={{ color: "black", background: "white", minWidth: "120px" }}
            onChange={handleChange}
          >
            {diffArray.map((number) => {
              return <MenuItem value={number}>{number}</MenuItem>;
            })}
          </Select>
        </FormControl>
        <Button variant="contained" onClick={handleSaveClick}>
          Guardar
        </Button>
      </Box>

      <Box sx={{ display: "flex", marginTop: "10px" }}>
        <Typography sx={{ width: "400px", color: "white", margin: "0 10px" }}>
          Series
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              onChange={handleChangeSeries}
              sx={{
                width: "500px",
                margin: "0px 0px 0px 0px",
                "& > *": { padding: "0px 0px 0px 0px" },
                "& > span": {
                  padding: "0px 0px 0px 0px",
                  marginBottom: "15px",
                },
                "& > span > span": {
                  padding: "0px 0px 0px 0px",
                },
              }}
            >
              <FormControlLabel
                labelPlacement="top"
                value="1"
                control={<Radio />}
                label="1"
              />
              <FormControlLabel
                labelPlacement="top"
                value="2"
                control={<Radio />}
                label="2"
              />
              <FormControlLabel
                labelPlacement="top"
                value="3"
                control={<Radio />}
                label="3"
              />
              <FormControlLabel
                labelPlacement="top"
                value="4"
                control={<Radio />}
                label="4"
              />
              <FormControlLabel
                labelPlacement="top"
                value="5"
                control={<Radio />}
                label="5"
              />
            </RadioGroup>
          </FormControl>
        </Typography>
        <Typography sx={{ color: "white", width: "250px", margin: "0 10px" }}>
          Repeticiones - {repeticiones}
          <Slider
            id="fieldRepeticiones"
            marks
            max={20}
            min={1}
            value={repeticiones}
            disabled={isFallo}
            valueLabelDisplay="auto"
            size="medium"
            onChange={handleChangeReps}
            aria-label="Series"
            color="secondary"
          />
          <Checkbox onChange={handleCheckbox} checked={isFallo} />
        </Typography>

        <Typography sx={{ color: "white", width: "1000px", margin: "0 10px" }}>
          Peso - {peso} kg
          <Slider
            id="fieldPeso"
            max={150}
            min={0.5}
            step={0.5}
            value={peso}
            valueLabelDisplay="auto"
            size="medium"
            onChange={handleChangePeso}
            aria-label="Series"
            color="secondary"
          />
        </Typography>
        <Button
          variant="contained"
          color="success"
          sx={{ height: "35px", marginTop: "10px" }}
          onClick={handleAgregar}
        >
          Agregar
        </Button>
      </Box>
    </>
  );
}
