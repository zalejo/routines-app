import { PosicionesItem } from "./PosicionesItem";
import List from "@mui/material/List";

export function PosicionesList({
  posiciones,
  updateEjercicios,
  selectedRow,
  setSelectedRow,
  copyToClipboard,
}) {
  return (
    <List
      sx={{
        width: "200px",
        bgcolor: "background.paper",
        position: "relative",
        overflow: "auto",
        maxHeight: "100%",
        borderRadius: "10px",
        marginRight: "3px",
      }}
      className="listContainer"
    >
      {posiciones.length === 0 && "Elegir Grupo Muscular"}
      {posiciones.map((posicion) => {
        return (
          <PosicionesItem
            {...posicion}
            key={posicion.id}
            updateEjercicios={updateEjercicios}
            selectedRow={selectedRow}
            setSelectedRow={setSelectedRow}
            copyToClipboard={copyToClipboard}
          />
        );
      })}
    </List>
  );
}
