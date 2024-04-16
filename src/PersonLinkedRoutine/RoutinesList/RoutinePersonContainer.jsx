import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { RoutinePersonRow } from "./RoutinePersonRow";

export function RoutinePersonContainer({
  selectedPersonId,
  people,
  setPeople,
}) {
  const selectedPerson = people.filter(
    (person) => person.id === selectedPersonId
  );
  const routines = selectedPerson[0]?.routines;

  return (
    <TableContainer sx={{ maxWidth: "900px" }} component={Paper}>
      <Table
        id="routineTable"
        sx={{
          maxWidth: 1000,
        }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow
            sx={{
              "& > *": {
                padding: "0px",
                maxWidth: "900px",
                width: "0",
                height: "10px",
              },
            }}
          >
            <TableCell />
            <TableCell align="left" sx={{ minWidth: "200px" }}>
              Fecha de Creación
            </TableCell>
            <TableCell align="left" sx={{ minWidth: "200px" }}>
              Dificultad
            </TableCell>
            <TableCell align="left" sx={{ minWidth: "200px" }}>
              Acción
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {routines &&
            routines.map((routine) => (
              <RoutinePersonRow
                key={routine.id}
                routine={routine}
                people={people}
                setPeople={setPeople}
              />
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
