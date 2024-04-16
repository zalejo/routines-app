import * as React from "react";
import { useState } from "react";
import { CopiedSnackAlert } from "./CopiedSnackAlert";
import { ChooserArea } from "./ChooserArea/ChooserArea";
import { ExerciseData } from "./Exercise/ExerciseData";

export function RoutineInterface({ data, groups, appendRoutine }) {
  const [posiciones, setPosiciones] = useState([]);
  const [ejercicios, setEjercicios] = useState([]);
  const [includedGroups, setIncludedGroups] = useState("");
  const [technique, setTechnique] = useState("");
  const [commonErrors, setCommonErrors] = useState("");
  const [selectedRow, setSelectedRow] = useState({
    group: null,
    position: null,
    exercise: null,
  });
  const [snackbarState, setSnackbarState] = useState({
    state: false,
    text: null,
  });

  function updatePosiciones(groupName) {
    setEjercicios([]);
    const newSetPosiciones = new Set();
    data.forEach((row) => {
      const key = row.POSICION;
      if (!newSetPosiciones[key] && row.GRUPO === groupName) {
        newSetPosiciones.add({
          id: crypto.randomUUID(),
          group: groupName,
          posicion: key,
        });
        newSetPosiciones[key] = true;
      }
    });
    const newGroupArray = Array.from(newSetPosiciones).sort((a, b) =>
      a.posicion.localeCompare(b.posicion)
    );

    setPosiciones(newGroupArray);
    setIncludedGroups("");
    setTechnique("");
    setCommonErrors("");
  }

  function updateEjercicios(groupName, posicionName) {
    const newSetEjercicios = new Set();
    data.forEach((row) => {
      const key = row.SPANISH;
      if (
        !newSetEjercicios[key] &&
        row.GRUPO === groupName &&
        row.POSICION === posicionName
      ) {
        newSetEjercicios.add({ id: row.CODIGO, titulo: key });
        newSetEjercicios[key] = true;
      }
    });
    const newPosicionesArray = Array.from(newSetEjercicios).sort((a, b) =>
      a.titulo.localeCompare(b.titulo)
    );

    setEjercicios(newPosicionesArray);
  }

  function updateDetails(id) {
    data.map((row) => {
      if (row.CODIGO === id) {
        setIncludedGroups(row.ACCESORIOS);
        setTechnique(row.TECNICA);
        setCommonErrors(row.ERRORES);

        const listAccesories = row.ACCESORIOS.split(", ");
        const tempList = [];
        listAccesories.forEach((muscle) => {
          tempList.push({
            id: crypto.randomUUID(),
            name: muscle,
          });
        });
      }
    });
  }

  function copyToClipboard(text, category) {
    navigator.clipboard.writeText(text);
    if (category) setSnackbarState({ state: true, text: category });
  }

  return (
    <>
      <CopiedSnackAlert
        {...snackbarState}
        setSnackbarState={setSnackbarState}
      />
      <ExerciseData
        selectedRow={selectedRow}
        setSelectedRow={setSelectedRow}
        appendRoutine={appendRoutine}
      />
      <ChooserArea
        groups={groups}
        posiciones={posiciones}
        ejercicios={ejercicios}
        updatePosiciones={updatePosiciones}
        updateEjercicios={updateEjercicios}
        updateDetails={updateDetails}
        selectedRow={selectedRow}
        setSelectedRow={setSelectedRow}
        copyToClipboard={copyToClipboard}
        includedGroups={includedGroups}
        technique={technique}
        commonErrors={commonErrors}
      />
    </>
  );
}
