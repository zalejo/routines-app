import { useState, useEffect } from "react";
import "./styles.css";
import * as XLSX from "xlsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CreateNewPerson } from "./createNewPerson.jsx";
import { CreateNewRoutine } from "./CreateNewRoutine.jsx";
import { PeopleRoutinesLayout } from "./PeopleRoutinesLayout.jsx";
import { Home } from "./Home.jsx";

export default function App() {
  const [groups, setGroups] = useState([]);
  const [exerciseVisible, setExerciseVisible] = useState(false);
  const [selectedPersonId, setSelectedPersonId] = useState(null);
  const [isHidden, setIsHidden] = useState(true);
  const [people, setPeople] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (!localValue || localValue.length == null) return [];

    return JSON.parse(localValue);
  });
  const [data, setData] = useState(() => {
    const localValue = localStorage.getItem("DATA");
    if (!localValue || localValue.length == null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    const newGroupSet = new Set();
    data.forEach((row) => {
      const key = row.GRUPO;
      if (!newGroupSet[key]) {
        newGroupSet.add({ id: crypto.randomUUID(), name: key });
        newGroupSet[key] = true;
      }
    });
    const newGroupArray = Array.from(newGroupSet).sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setGroups(newGroupArray);
  }, [data]);

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(people));
  }, [people]);

  function addPerson(firstName, lastName, age, weight, height, startDate) {
    setPeople((currentPeople) => {
      return [
        ...currentPeople,
        {
          id: crypto.randomUUID(),
          firstName,
          lastName,
          age,
          weight,
          height,
          startDate,
          routines: [],
        },
      ];
    });
  }

  function deletePerson(id) {
    setPeople((currentPeople) => {
      return currentPeople.filter((person) => id !== person.id);
    });
  }

  function showFields() {
    setIsHidden((prev) => !prev);
  }

  function showExercises() {
    if (!selectedPersonId) return alert("¡Elegir una persona de la lista!");
    setExerciseVisible((prev) => !prev);
  }

  const loadExercises = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.readAsArrayBuffer(e.target.files[0]);
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "arrayBuffer" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      setData(parsedData);
      localStorage.setItem("DATA", JSON.stringify(parsedData));
    };
  };

  const handleLoadExercises = () => {
    document.getElementById("fileInput").click();
  };

  const appendRoutine = (newRoutine) => {
    setPeople(
      people.map((person) => {
        if (person.id === selectedPersonId) {
          const updatedPerson = { ...person };
          updatedPerson.routines = [...updatedPerson.routines, newRoutine];
          return updatedPerson;
        }
        return person;
      })
    );
    setSelectedPersonId(null);
    // setExerciseVisible(false);
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/newPerson">
          <CreateNewPerson
            showFields={showFields}
            showExercises={showExercises}
            loadExercises={loadExercises}
            handleLoadExercises={handleLoadExercises}
            addPerson={addPerson}
            isHidden={isHidden}
          />
        </Route>
        <Route exact path="/newRoutine">
          <CreateNewRoutine
            exerciseVisible={exerciseVisible}
            data={data}
            groups={groups}
            appendRoutine={appendRoutine}
          />
        </Route>
        <Route exact path="/people">
          <PeopleRoutinesLayout
            people={people}
            setPeople={setPeople}
            deletePerson={deletePerson}
            selectedPersonId={selectedPersonId}
            setSelectedPersonId={setSelectedPersonId}
          />
        </Route>
      </Switch>
    </Router>
  );
}
