import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { PersonItem } from "./PersonItem";

export function PersonList({
  people,
  deletePerson,
  selectedPersonId,
  setSelectedPersonId,
}) {
  function handlePersonSelection(persona) {
    if (persona.id != selectedPersonId) {
      setSelectedPersonId(persona.id);
    } else {
      setSelectedPersonId(null);
    }
  }

  return (
    <TableContainer
      sx={{
        maxWidth: "900px",
        maxHeight: "900px",
      }}
      component={Paper}
    >
      <Table id="peopleTable">
        <TableHead>
          <TableRow
            sx={{ maxHeight: "35px", "& > *": { padding: "0px 0px 0px 8px" } }}
          >
            <TableCell align="left">Nombre</TableCell>
            <TableCell align="left">Apellido</TableCell>
            <TableCell align="left">Edad</TableCell>
            <TableCell align="left">Peso</TableCell>
            <TableCell align="left">Altura</TableCell>
            <TableCell align="left">Inicio</TableCell>
            <TableCell align="left">Rutinas</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {people.map((person) => {
            return (
              <PersonItem
                key={person.id}
                person={person}
                deletePerson={deletePerson}
                selectedPersonId={selectedPersonId}
                handlePersonSelection={handlePersonSelection}
              />
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
