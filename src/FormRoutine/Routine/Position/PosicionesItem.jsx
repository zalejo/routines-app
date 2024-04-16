import ListItem from "@mui/material/ListItem";

export function PosicionesItem({
  group,
  posicion,
  updateEjercicios,
  selectedRow,
  setSelectedRow,
  copyToClipboard,
}) {
  function posicionClickHandle(e) {
    const text = e.target.innerHTML;
    setSelectedRow({
      ...selectedRow,
      position: e.target.innerHTML,
    });
    const posicionName = e.target.innerHTML.toUpperCase();
    updateEjercicios(group, posicionName);
    copyToClipboard(text, false);
  }

  const cleanUbicacion = posicion.charAt(0) + posicion.slice(1).toLowerCase();
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
          selectedRow.position == cleanUbicacion
            ? "lightblue"
            : "rgb(245, 245, 245)",
      }}
      className="rowGroupItem"
      onClick={posicionClickHandle}
    >
      {cleanUbicacion}
    </ListItem>
  );
}
