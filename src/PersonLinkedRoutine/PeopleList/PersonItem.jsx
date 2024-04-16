import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";

export function PersonItem({
  person,
  deletePerson,
  handlePersonSelection,
  selectedPersonId,
}) {
  return (
    <TableRow
      key={person.id}
      sx={{
        "& > *": { padding: "10px 0px 10px 8px" },
        background: selectedPersonId == person.id ? "lightgray" : "inherit",
      }}
      onClick={() => handlePersonSelection(person)}
    >
      <TableCell align="left">{person.firstName}</TableCell>
      <TableCell align="left">{person.lastName}</TableCell>
      <TableCell align="left">{person.age}</TableCell>
      <TableCell align="left">{person.weight}</TableCell>
      <TableCell align="left">{person.height}</TableCell>
      <TableCell align="left">{person.startDate}</TableCell>
      <TableCell align="left">{person.routines?.length}</TableCell>
      <TableCell align="center">
        <Button
          variant="contained"
          color="error"
          sx={{ height: "25px", padding: "0px" }}
          onClick={() => deletePerson(person.id)}
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
}
