import { Box } from "@mui/material";
import { DetailsContainer } from "../Detail/DetailsContainer";
import { EjerciciosList } from "../Exercise/EjerciciosList";
import { PosicionesList } from "../Position/PosicionesList";
import { GroupList } from "../Group/GroupList";

export function ChooserArea(props) {
  return (
    <>
      <Box sx={{ display: "flex", maxHeight: "680px" }}>
        <GroupList
          groups={props.groups}
          updatePosiciones={props.updatePosiciones}
          selectedRow={props.selectedRow}
          setSelectedRow={props.setSelectedRow}
          copyToClipboard={props.copyToClipboard}
        />

        <PosicionesList
          posiciones={props.posiciones}
          updateEjercicios={props.updateEjercicios}
          selectedRow={props.selectedRow}
          setSelectedRow={props.setSelectedRow}
          copyToClipboard={props.copyToClipboard}
        />

        <EjerciciosList
          data={props.data}
          posiciones={props.posiciones}
          ejercicios={props.ejercicios}
          updateDetails={props.updateDetails}
          selectedRow={props.selectedRow}
          setSelectedRow={props.setSelectedRow}
          copyToClipboard={props.copyToClipboard}
        />

        <DetailsContainer
          includedGroups={props.includedGroups}
          technique={props.technique}
          commonErrors={props.commonErrors}
          copyToClipboard={props.copyToClipboard}
        />
      </Box>
    </>
  );
}
