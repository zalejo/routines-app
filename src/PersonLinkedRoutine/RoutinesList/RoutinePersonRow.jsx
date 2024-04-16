import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

RoutinePersonRow.propTypes = {
  row: PropTypes.shape({
    id: PropTypes.string.isRequired,
    rutina: PropTypes.arrayOf(
      PropTypes.shape({
        ejercicio: PropTypes.string.isRequired,
        serie: PropTypes.number.isRequired,
        repeticion: PropTypes.number.isRequired,
        weight: PropTypes.number.isRequired,
        creationDate: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export function RoutinePersonRow({ routine, people, setPeople }) {
  const exercises = routine.exercises;
  const [rowOpen, setRowOpen] = useState(false);

  function deleteRoutine(id) {
    setPeople(
      people.map((person) => {
        return {
          ...person,
          routines: person.routines.filter((routine) => id !== routine.id),
        };
      })
    );
  }

  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setRowOpen((state) => !state)}
          >
            icon
          </IconButton>
        </TableCell>
        <TableCell>{routine.creationDate}</TableCell>
        <TableCell>{routine.difficulty}</TableCell>
        <TableCell>
          <Button
            variant="contained"
            color="error"
            sx={{ height: "25px", padding: "0px" }}
            onClick={() => deleteRoutine(routine.id)}
          >
            Delete
          </Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={4}>
          <Collapse in={rowOpen} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Rutina
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Ejercicio</TableCell>
                    <TableCell align="center">Series</TableCell>
                    <TableCell align="center">Repes</TableCell>
                    <TableCell align="center">Peso</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {exercises.map((exercise) => (
                    <TableRow key={exercise.id}>
                      <TableCell component="th" scope="row">
                        {exercise.ejercicio}
                      </TableCell>
                      <TableCell align="center">{exercise.serie}</TableCell>
                      <TableCell align="center">
                        {exercise.repeticion}
                      </TableCell>
                      <TableCell align="center">{exercise.weight}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}
