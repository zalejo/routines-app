import { EjercicioItem } from "./EjercicioItem";
import List from "@mui/material/List";

export function EjerciciosList({
  ejercicios,
  updateDetails,
  selectedRow,
  setSelectedRow,
  copyToClipboard,
}) {
  return (
    <List
      sx={{
        width: "50%",
        bgcolor: "background.paper",
        position: "relative",
        overflow: "auto",
        maxHeight: "300",
        borderRadius: "10px",
        marginRight: "3px",
      }}
    >
      {ejercicios.length === 0 && "Elegir posición"}
      {ejercicios.map((ejercicio) => {
        return (
          <EjercicioItem
            {...ejercicio}
            key={ejercicio.id}
            updateDetails={updateDetails}
            selectedRow={selectedRow}
            setSelectedRow={setSelectedRow}
            copyToClipboard={copyToClipboard}
          />
        );
      })}
    </List>
  );
}
