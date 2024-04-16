import ListItem from "@mui/material/ListItem";

export function EjercicioItem({
  id,
  titulo,
  updateDetails,
  selectedRow,
  setSelectedRow,
  copyToClipboard,
}) {
  function handleExerciseClick(e) {
    const text = e.target.innerHTML;
    setSelectedRow({
      ...selectedRow,
      exercise: text,
    });
    updateDetails(id);
    copyToClipboard(text, false);
  }

  const cleanTitulo = titulo.charAt(0) + titulo.slice(1).toLowerCase();
  return (
    <ListItem
      sx={{
        borderRadius: "8px",
        ":hover": {
          boxShadow: 5,
          backgroundColor: "lightgray",
        },
        marginBottom: "4px",
        backgroundColor:
          selectedRow.exercise == cleanTitulo
            ? "lightblue"
            : "rgb(245, 245, 245)",
      }}
      id={id}
      className="rowGroupItem"
      onClick={handleExerciseClick}
    >
      {cleanTitulo}
    </ListItem>
  );
}
