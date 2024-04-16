import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

export function NewRoutineTable({ routine, setRoutine }) {
  function handleDeleteRow(id) {
    setRoutine((currentRoutine) => {
      return {
        ...currentRoutine,
        exercises: currentRoutine.exercises.filter((row) => id !== row.id),
      };
    });
  }

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
            <TableCell align="left" sx={{ minWidth: "500px" }}>
              Ejercicio
            </TableCell>
            <TableCell align="center">Series</TableCell>
            <TableCell align="center">Repeticiones</TableCell>
            <TableCell align="center">Peso (kg)</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {routine.exercises &&
            routine.exercises.map((row) => (
              <TableRow
                key={row.id}
                sx={{
                  "& > *": {
                    padding: "0px",
                    maxWidth: "600px",
                    width: "0",
                    height: "35px",
                  },
                }}
              >
                <TableCell align="left">{row.ejercicio}</TableCell>
                <TableCell align="center">{row.serie}</TableCell>
                <TableCell align="center">{row.repeticion}</TableCell>
                <TableCell align="center">{row.weight}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    color="error"
                    sx={{ height: "30px" }}
                    onClick={() => handleDeleteRow(row.id)}
                  >
                    X
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
